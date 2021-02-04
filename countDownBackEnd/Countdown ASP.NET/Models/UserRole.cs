using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Countdown_ASP.NET.Models
{
    public class UserRole // for signifying authorization levels
    {
        public int Id { get; set; }

        public string UserRoleName { get; set; } // Authenticated User --- ProductOwner --- Admin
    }
}
