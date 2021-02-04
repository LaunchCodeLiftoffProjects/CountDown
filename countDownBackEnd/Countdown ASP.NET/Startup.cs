using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Countdown_ASP.NET.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Countdown_ASP.NET
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDbContext<ProductDbContext>(options => options.UseMySql(Configuration.GetConnectionString("DefaultConnection")));

            //services.AddDbContext<ProductDbContext>(o => o.UseSqlite("Data Source=sqlite.db;"));

            services.AddSwaggerGen(
              options => {
                  options.SwaggerDoc(
                      "v1",
                      new OpenApiInfo {
                          Version = "v1",
                          Title = "CountDown API",
                          Description = "REST API for managing CountDown Products"
                      }
                  );
              }
           );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();

            app.UseRouting();

            //app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

            app.UseSwagger();
            app.UseSwaggerUI(
                options => {
                    options.RoutePrefix = ""; // root path of the server
                    options.SwaggerEndpoint(
                    "/swagger/v1/swagger.json",
                    "Team CountDown's APP API Documentation"
                    );
                }
            );

            // run migrations on startup
            var dbContext = app.ApplicationServices.CreateScope()
                .ServiceProvider.GetService<ProductDbContext>();
            dbContext.Database.Migrate();

        }
    }
}
