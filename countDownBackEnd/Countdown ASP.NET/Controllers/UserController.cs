using Countdown_ASP.NET.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.Annotations;
using Countdown_ASP.NET.Models;
using Countdown_ASP.NET.Interfaces;

namespace Countdown_ASP.NET.Controllers
{
    [ApiController]
    [Route(Entrypoint)]
    public class UserController : ControllerBase
    {
        public const string Entrypoint = "/api/users";
        private readonly ProductDbContext _dbContext;
        private readonly ITokenService _tokenService;

        public UserController(ProductDbContext dbContext, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _dbContext = dbContext;
        }


        [HttpPost("register")]
        [SwaggerOperation(OperationId = "RegisterUser", Summary = "Adds a new user")]
        [SwaggerResponse(201, "Returns registered user", Type = typeof(User))]
        [SwaggerResponse(400, "Invalid or missing data", Type = null)]
        public async Task<ActionResult<User>> RegisterUser([FromBody] NewUserDTO NewUserDto)
        {
            var userEntry = _dbContext.Users.Add(new User());
            userEntry.CurrentValues.SetValues(NewUserDto);
            await _dbContext.SaveChangesAsync();

            var newUser = userEntry.Entity;

            return CreatedAtAction(
              nameof(GetUser),
              new { entityId = newUser.Id },
              newUser
            );
        }

        [HttpPost("login")]
        [SwaggerOperation(OperationId = "LoginUser", Summary = "Logs in existing user")]
        [SwaggerResponse(201, "Returns registered user", Type = typeof(User))]
        [SwaggerResponse(400, "Invalid or missing data", Type = null)]
        public async Task<ActionResult<UserDTO>> LoginUser([FromBody] LoginDTO loginDto)
        {
            var user = await _dbContext.Users
                .SingleOrDefaultAsync(x => x.Email == loginDto.Email);
            
            if (user == null) return Unauthorized("Invalid email");

            return new UserDTO
            {
                Name = user.Name,
                Token = _tokenService.CreateToken(user)
            };
        }


        [HttpGet]
        [Route("{userId}")]
        [SwaggerOperation(OperationId = "Get User", Summary = "Retrieves user")]
        [SwaggerResponse(200, "Successful", Type = typeof(User))]
        [SwaggerResponse(404, "User not found", Type = null)]
        public ActionResult GetUser([FromRoute] int userId)
        {
            var user = _dbContext.Users.Find(userId);
            if (user == null) return NotFound();

            return Ok(User);
        }
    }
}
