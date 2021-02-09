using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PrideWeddingPlanners.Models;

namespace PrideWeddingPlanners.Data
{
    public class WeddingDBContext : DbContext
    {
        public WeddingDBContext(DbContextOptions<WeddingDBContext> options)
: base(options)
        {

        }
        public DbSet<Admin> AdminTable { get; set; }
        public DbSet<ClientRegistration> ClientTable { get; set; }   
        public DbSet<Package> PackagesTable { get; set; }
        public DbSet<Payment> PaymentsTable { get; set; }
        public DbSet<VendorRegistration> VendorTable { get; set; }
        public DbSet<PrideWeddingPlanners.Models.ClientLogin> ClientLogin { get; set; }
        public DbSet<PrideWeddingPlanners.Models.VendorLogin> VendorLogin { get; set; }
        
    }
}
