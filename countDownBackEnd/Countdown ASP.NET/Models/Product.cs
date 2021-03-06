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
        
        public string Title { get; set; }
        public string ImgLink { get; set; }


        public User User { get; set; }
        public int UserId { get; set; }

        public DateTime ReleaseDate { get; set; }
        


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

        //send to the backend when available
        public int UserID { get; set; }
        public User user { get; set; }

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
