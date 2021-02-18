using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Countdown_ASP.NET.Models
{
    public class User
    {
        public int Id { get; set; }
        public UserRole Role { get; set; }


        //public ProductContributor Contributor { get; set; }

        //public int ContributorID { get; set; } // As a vendor they'll automatically be given a ContributorId -- Contributor object "Name" will be entered manually or pulled in from User object if an existing User is selected as a "Contributor" from the dropdown list is present

        public int RoleId { get; set; } // User Role is automatically determined as "Authenticated User", unless they have a VID (vender ID) associated with any products, in which case they'll have more authority over that specific collection of product(s)
        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public User(string name, string email, string password)
        {
            Name = name;
            Email = email;
            Password = password;
            RoleId = 1; // assuming the number "1" represents this level of authorization
        }
    }
}

// Unauthenticated user logs in, receives UserId. Creates a product; the product pulls in their UserId. The form on which the product is created will have a checkbox that asks if this is the user's product -- 
// meaning they have rights to sell and promote the product -- and when checked, a VendorId and profile will be created (on which their UserName will automatically be added, with the option for the Vendor to change the VendorName;
// like for a music artist who's posting on behalf of a band under a bandname. The VendorId will be linked to their UserId and to any products treate, where they check that box. The Vendor's name can then be added to a 
// dropdown list of Vendor names for other users to select from if they are creating their own 'events'. The VendorId is seperate from the UserId so 

