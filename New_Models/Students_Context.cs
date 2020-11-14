using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SMS.New_Models
{
    public class Students_Context : DbContext
    {
       
        public Students_Context(DbContextOptions<Students_Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Students> Students { get; set; }


    }
}
