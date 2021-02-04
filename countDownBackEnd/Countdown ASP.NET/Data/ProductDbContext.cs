using Countdown_ASP.NET.Models;
using Microsoft.EntityFrameworkCore;

namespace Countdown_ASP.NET.Data
{
    public class ProductDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public DbSet<ProductApiRequestUrl> ApiRequests { get; set; }

        public DbSet<ProductApiSiteName> ApiNames { get; set; }

        public DbSet<ProductCategory> Categories { get; set; }

        public DbSet<ProductType> Type { get; set; }

        public DbSet<ProductSingleVendor> SingleVendors { get; set; }

        public DbSet<ProductMultiVendor> MultiVendors { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<UserRole> UserRoles { get; set; }

        public ProductDbContext(DbContextOptions options)
            : base(options) { }
    }
}
