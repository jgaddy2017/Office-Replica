using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace office_backend.Resources
{
    #nullable disable
    public record SaveProjectResource
    {
        public string ProjectName { get; set; }
        public string ProjectType { get; set; } 
        public string UserId { get; set; }
    }
}
