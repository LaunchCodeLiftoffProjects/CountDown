using Countdown_ASP.NET.Models;

namespace Countdown_ASP.NET.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}