using Microsoft.EntityFrameworkCore;
using office_backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace office_backend.Persistence.Repositories
{
    public class UserRepository
    {
        private readonly Office_ReplicaContext _dbContext;

        public UserRepository(Office_ReplicaContext dbContext) {
            _dbContext = dbContext;
        }

        public async Task<User> getUser(int id) {
            //var user = await (from u in _dbContext.Users where u.Id == id select u).ToListAsync();
            var user = await (from u in _dbContext.Users where u.Id == id select u).FirstAsync();
            return user;
        }
            
    }
}
