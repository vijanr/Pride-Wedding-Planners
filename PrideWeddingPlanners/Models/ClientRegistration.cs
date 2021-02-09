using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PrideWeddingPlanners.Models
{
    public class ClientRegistration
    {
        [Key]
        public int ID { get; set; }
        public string ClientNIC { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        [DataType(DataType.PhoneNumber)]
        public string MobileNo { get; set; }
        public string Address { get; set; }

        [Required(ErrorMessage = "UserName is Required")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Email is Required")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]

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
