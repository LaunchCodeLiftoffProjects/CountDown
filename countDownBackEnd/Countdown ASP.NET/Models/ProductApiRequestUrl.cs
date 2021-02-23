using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Countdown_ASP.NET.Models
{
    public class ProductApiRequestUrl
    {
        public int Id { get; set; }

        public ProductApiSiteName ApiSiteName { get; set; }
        public int ApiSiteNameId { get; set; }

        public string RequestUrl { get; set; }

        public List<Product> Products { get; set; }
    }
}
