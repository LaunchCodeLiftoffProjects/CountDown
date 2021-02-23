using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Countdown_ASP.NET.Models
{
    public class ProductMultiVendor // this user can CRUD more than one Vendor (i.e. a publshing house, production company, record label...)
    {
        public int Id { get; set; }

        public UserRole Role { get; set; }

        public int RoleId { get; set; } // User Role is automatically determined as "Owner"

        public string Name { get; set; }

        public User User { get; set; }

        public int UserId { get; set; }

        public List<Product> Products { get; set; } // there can be many products associated with this id

        public List<ProductSingleVendor> Vendors { get; set; } // the list of Authors, Directors, Musicians represented by this id

        public ProductMultiVendor(string name)
        {
            Name = name;
            RoleId = 3; // assuming the number "3" represents this level of authorization
        }
    }
}
