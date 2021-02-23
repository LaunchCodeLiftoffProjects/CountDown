using Countdown_ASP.NET.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.Annotations;
using Countdown_ASP.NET.Models;

namespace Countdown_ASP.NET.Controllers
{
    [ApiController]
    [Route(Entrypoint)]
    public class ProductController : ControllerBase
    {
        public const string Entrypoint = "/api/products";

        private readonly ProductDbContext _dbContext;

        public ProductController(ProductDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [SwaggerOperation(
            OperationId = "GetProducts",
            Summary = "Retrieve all Products",
            Description = "Publicly available"
   )]
        [SwaggerResponse(200, "List of public product data", Type = typeof(List<Product>))]
        public ActionResult GetResources() => Ok(_dbContext.Products.ToList());

        [HttpPost]
        [SwaggerOperation(OperationId = "RegisterProduct", Summary = "Create a new Product")]
        [SwaggerResponse(201, "Returns new data", Type = typeof(Product))]
        [SwaggerResponse(400, "Invalid or missing data", Type = null)]
        public ActionResult RegisterProduct([FromBody] NewProductDto NewProductDto)
        {
            var productEntry = _dbContext.Products.Add(new Product());
            productEntry.CurrentValues.SetValues(NewProductDto);
            _dbContext.SaveChanges();

            var newProduct = productEntry.Entity;

            return CreatedAtAction(
              nameof(GetProduct),
              new { entityId = newProduct.Id },
              newProduct
            );
        }

        [HttpGet]
        [Route("{productId}")]
        [SwaggerOperation(OperationId = "GetProduct", Summary = "Retrieve Product data")]
        [SwaggerResponse(200, "Complete Product data", Type = typeof(Product))]
        [SwaggerResponse(404, "Product not found", Type = null)]
        public ActionResult GetProduct([FromRoute] long productId)
        {
            var product = _dbContext.Products.Find(productId);
            if (product == null) return NotFound();

            return Ok(product);
        }

        [HttpDelete]
        [Route("{productId}")]
        [SwaggerOperation(
          OperationId = "DeleteProduct",
          Summary = "Cancel (delete) an Product"
        )]
        [ProducesResponseType(204)] // suppress default swagger 200 response code
        [SwaggerResponse(204, "No content success", Type = null)]
        public ActionResult DeleteProduct([FromRoute] long productId)
        {
            _dbContext.Products.Remove(new Product { Id = productId });

            try
            {
                _dbContext.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                // row did not exist
                return NotFound();
            }

            return NoContent();
        }


    }
}
