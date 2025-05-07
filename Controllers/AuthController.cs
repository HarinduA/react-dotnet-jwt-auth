using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AuthPOC.Models;
using AuthPOC.Data;
using Microsoft.Extensions.Logging;  // Add for logging
using System;

namespace AuthPOC.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;
        private readonly ILogger<AuthController> _logger;

        public AuthController(IConfiguration configuration, ApplicationDbContext context, ILogger<AuthController> logger)
        {
            _configuration = configuration;
            _context = context;
            _logger = logger;
        }

        // Login endpoint
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            try
            {
                // Check if the user exists in the database
                var user = _context.Users.FirstOrDefault(u =>
                    u.Username == request.Username && u.Password == request.Password);

                if (user == null)
                {
                    return Unauthorized("Invalid username or password");
                }

                // Generate JWT token
                var token = GenerateJwtToken(user.Username, user.Role);

                // Return the token and role
                return Ok(new { token, role = user.Role });
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occurred during login: {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }

        // Generate JWT token
        private string GenerateJwtToken(string username, string role)
        {
            try
            {
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    claims: new[]
                    {
                        new Claim(ClaimTypes.Name, username),
                        new Claim(ClaimTypes.Role, role)
                    },
                    expires: DateTime.UtcNow.AddHours(1), // Token expiration
                    signingCredentials: creds
                );

                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error generating JWT token: {ex.Message}");
                throw;
            }
        }
    }
}
