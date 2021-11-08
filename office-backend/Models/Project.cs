using System;
using System.Collections.Generic;

#nullable disable

namespace office_backend.Models
{
    public partial class Project
    {
        public int ProjectId { get; set; }
        public int? ProjectCreator { get; set; }
        public string ProjectName { get; set; }
        public string ProjectType { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? LastModified { get; set; }

        public virtual User User { get; set; }
    }
}
