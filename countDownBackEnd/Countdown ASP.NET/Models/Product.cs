using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Dynamic;
using Countdown_ASP.NET.Controllers;

namespace Countdown_ASP.NET.Models
{
    public class Product : UniqueEntity
    {

        //public ProductType Type { get; set; }

        //public int TypeId { get; set; }

        //public List<ProductCategory> Categories { get; set; }

        public string Title { get; set; }
        public string ImgLink { get; set; }

        //public User User { get; set; } // artist who has the right to sell and promote the work under their own name or on behalf of a single team/band

        //public int UserId { get; set; }

        //public ProductSingleVendor Vendor { get; set; } // artist who has the right to sell and promote the work under their own name or on behalf of a single team/band

        //public int VendorId { get; set; }

        //public ProductMultiVendor MultiVendor { get; set; } // production company, publishing house, record company, who has right to sell products under *several* vendor names

        //public int MultiVendorId { get; set; }

        //public string Description { get; set; }

        public DateTime ReleaseDate { get; set; }

        //public bool Verified { get; set; } // is the userId connected to someone who has the same Single Vendor Id (or Multi-Vendor Id, if one is present) as what's connected to this product? So, a user or 
        // vendor can CRUD their own events, but the events won't be "verified" unless their Vendor or multi-vendor ide matches either the single or multi-vendor Id associated with the produdt.


        // public List<Contributor> Contributors { get; set; } // cast of actors/directors, illustrator, featured music artist, etc -- offer a dropdown list of users to add, but set as a new table of Ids to cover instances where a Vendor adds names of ppl who are not users of the software

        // public List<Outlet> Outlets { get; set; } // where product will be able to be found once released



    }

    // When a product is created, the UserId will be applied as the sourceID, unless the User selects the checkbox indicating that they are the singleVendor of that product, in which case their (new or pre-existing) VID will be
    // placed as the SourceId. If the VID and SourceID don't match, we won't mark the product as "Verified". If the SourceID is an API ID, we can automatically mark the product as "Verified"

    public class NewProductDto
    {
        //[NotNull]
        //[Required]
        //public ProductType Type { get; set; }

        [NotNull]
        [Required]
        [StringLength(
            100,
            MinimumLength = 10,
            ErrorMessage = "Title must be between 10 and 100 characters"
            )]
        public string Title { get; set; }

        [NotNull]
        [Required]
        [StringLength(
            200,
            MinimumLength = 10,
            ErrorMessage = "Title must be between 10 and 200 characters"
            )]
        public string ImgLink { get; set; }

        [NotNull]
        [Required]
        public DateTime ReleaseDate { get; set; }

        
        //public int UserID { get; set; }

        //[NotNull]
        //[Required]
        //[StringLength(
        //    100,
        //    MinimumLength = 3,
        //    ErrorMessage = "Name of the Artist/Representative must be between 3 and 100 characters"
        //    )]
        //public string Vendor { get; set; }

        //[NotNull]
        //[Required]
        //[StringLength(1000, ErrorMessage = "Description can't be more than 1000 characters")]
        //public string Description { get; set; }
    }
}
