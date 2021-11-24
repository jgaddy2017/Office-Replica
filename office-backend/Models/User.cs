using System;
using System.Collections.Generic;

#nullable disable

namespace office_backend.Models
{
    public partial class User
    {
        public User()
        {
            Projects = new HashSet<Project>();
        }

        public string UserId { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Pass { get; set; }

        public virtual ICollection<Project> Projects { get; set; }
    }
}
