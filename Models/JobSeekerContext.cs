using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class JobSeekerContext: DbContext
    {
        public JobSeekerContext():base("JobSeekerRegistrationContext") { }
        public DbSet<JobSeeker> JobSeekers { get; set; }
    }
}