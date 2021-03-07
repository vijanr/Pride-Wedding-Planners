using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace PrideWeddingPlanners.Models
{
    public class Upload
    {
        [Key]
        public int CompanyId { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string CompanyName { get; set; }


        [Column(TypeName = "nvarchar(50)")]
        public string Located_distric { get; set; }


        [Column(TypeName = "nvarchar(50)")]
        public string Located_province { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Min_package { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Mid_package { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Max_package { get; set; }



        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }
    }
}
