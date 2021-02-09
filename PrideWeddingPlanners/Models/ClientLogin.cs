using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PrideWeddingPlanners.Models
{
    public class ClientLogin
    {
        [Key]
        public int ID { get; set; }
       
       
        [Required]
        public string UserName { get; set; }

        /* [Required]
         [DataType(DataType.EmailAddress)]
         [EmailAddress]
        public string Email { get; set; }
        */

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
