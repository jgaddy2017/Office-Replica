using office_backend.Models;
using System;
using System.Collections.Generic;
//using System.Data.Entity;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using office_backend.Resources;

namespace office_backend.Persistence.Repositories
{
    public class ProjectRepository
    {
        private readonly Office_ReplicaContext _dbContext;

        public ProjectRepository(Office_ReplicaContext dbContext) {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Project>> GetAllProjects()
        {
            //return await _dbContext.Projects.ToList();
            //return await _dbContext.Projects.Where(u => u.Id > 0 ).ToList();
            //IQueryable<Project> query = _dbContext.Project.FindAsync
            //return await _dbContext.Projects.AllAsync()
            var projects = await (from p in _dbContext.Projects select p).ToListAsync();
            return projects;
        }

        public async Task AddProject(SaveProjectResource saveProjectResource) 
        {

            Guid guid = Guid.NewGuid();
            Project newProject = new Project()
            {
                ProjectId = guid.ToString(),
                ProjectCreator = saveProjectResource.UserId,
                ProjectName = saveProjectResource.ProjectName,
                ProjectType = saveProjectResource.ProjectType,
                CreationDate = DateTime.Now,
                LastModified = DateTime.Now
            };
            
            await _dbContext.Projects.AddAsync(newProject);
       
            await _dbContext.SaveChangesAsync();
        }
    }
}
