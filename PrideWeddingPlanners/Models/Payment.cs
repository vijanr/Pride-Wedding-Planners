using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PrideWeddingPlanners.Models
{
    public class Payment
    {
        [Key]
        public int ID { get; set; }

        [DataType(DataType.CreditCard)]
        public string CardNo { get; set; }
        public string CardholderName { get; set; }
        public string ExpDate { get; set; }
        public string CVV { get; set; }
    }
}
