//using gcs.Models;
//using Microsoft.EntityFrameworkCore;

//namespace gcs.Models
//{
//    public class ApplicationDbContext
//    {
//    }
//}

// gcs/Models/ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;
using gcs.Models;

namespace gcs.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Dashboard> Dashboards { get; set; }
    }
}