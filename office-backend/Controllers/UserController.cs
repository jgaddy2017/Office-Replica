using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using office_backend.Models;
using office_backend.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace office_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserRepository _userRepository;

        public UserController(UserRepository userRepository) {
            _userRepository = userRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(User user) {

            await _userRepository.saveUser(user);

            return Ok(user);
        }
    }
}
