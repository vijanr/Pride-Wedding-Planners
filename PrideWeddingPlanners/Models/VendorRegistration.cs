using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PrideWeddingPlanners.Models
{
    public class VendorRegistration
    {
        [Key]
        public int ID { get; set; }
        public string CompanyName { get; set; }

        [DataType(DataType.PhoneNumber)]
        public string TelephoneNo { get; set; }
        public string CompanyCategory { get; set; }

        [Required(ErrorMessage = "UserName is Required")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Email is Required")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is Required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Please Re-enter Your Password")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Password Does Not Match")]
        public string ConfirmPassword { get; set; }


    }
}
