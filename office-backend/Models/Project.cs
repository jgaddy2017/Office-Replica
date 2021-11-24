using System;
using System.Collections.Generic;

#nullable disable

namespace office_backend.Models
{
    public partial class Project
    {
        public string ProjectId { get; set; }
        public string ProjectCreator { get; set; }
        public string ProjectName { get; set; }
        public string ProjectType { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? LastModified { get; set; }

        public virtual User ProjectCreatorNavigation { get; set; }
    }
}
