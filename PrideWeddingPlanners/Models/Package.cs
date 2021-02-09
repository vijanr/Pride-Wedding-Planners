using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PrideWeddingPlanners.Models
{
    public class Package
    {
		[Key]
		public int ID { get; set; }

		[DataType(DataType.Currency)]
		public string Price { get; set; }
		public string Detail { get; set; }

		[DataType(DataType.Date)]
		public string StartDate { get; set; }

		[DataType(DataType.Url)]
		public string ImageUrl { get; set; }

		[DataType(DataType.Date)]
		public string EndDate { get; set; }
		public int PackageNo { get; set; }
	}
}
