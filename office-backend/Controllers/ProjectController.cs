using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using office_backend.Models;
using Microsoft.AspNetCore.Cors;
using office_backend.Persistence;
using office_backend.Persistence.Repositories;
using office_backend.Resources;

namespace office_backend.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {

        private readonly ProjectRepository _projectRepository;
        private readonly UserRepository _userRepository;
        public ProjectController(ProjectRepository projectRepository, UserRepository userRepository) 
        {
            _projectRepository = projectRepository;
            _userRepository = userRepository;
        }
        
        [HttpGet]
        public async Task<IEnumerable<Project>> GetAllProjects()
        {
            var projects = await _projectRepository.GetAllProjects();

            return projects;
        }

        [HttpPost]
        public async Task<IActionResult> CreateProject([FromBody] SaveProjectResource saveProjectResource) {

            //int getUserId = Integer.Parse(project.UserId);
            //int getUserId = int.Parse(project.UserId);
            var currentUser = await _userRepository.getUser(saveProjectResource.UserId);


            Project newProject = new Project()
            {
                User = currentUser,
                ProjectName = saveProjectResource.ProjectName,
                ProjectType = saveProjectResource.ProjectType,
                CreationDate = DateTime.Now,
                LastModified = DateTime.Now
            };

            await _projectRepository.AddProject(newProject);
            return Ok(newProject);
        }

    }
}
