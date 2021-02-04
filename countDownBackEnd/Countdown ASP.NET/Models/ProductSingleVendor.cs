using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Countdown_ASP.NET.Models
{
    public class ProductSingleVendor
    {
        public int Id { get; set; }

        public UserRole Role { get; set; }

        public int RoleId { get; set; } // User Role is automatically determined as "Owner"

        public string Name { get; set; }

        public User User { get; set; }

        public int UserId { get; set; }

        public List<Product> Products { get; set; }

        public ProductSingleVendor(string name)
        {
            Name = name;
            RoleId = 2; // assuming the number "2" represents this level of authorization
        }
    }
}
