using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SMS.New_Models
{
    public class Students
    {
        [Required]
        public int id { get; set; }
        public int StudCode { get; set; }
        public string StudName { get; set; }
        public string FatherName { get; set; }
        public string MotherName { get; set; }
        public string Class { get; set; }
        public string Gender { get; set; }
        public string DateOfBirth { get; set; }
        public string LocationOfBirth { get; set; }
        public string Nationality { get; set; }
        public string Religion { get; set; }
        public string FatherJob { get; set; }
        public string Address { get; set; }
        public string StreetName { get; set; }
        public string Area { get; set; }
        public bool State { get; set; }
        public string FatherMobile { get; set; }
        public string MotherMobile { get; set; }
        public string Telephone { get; set; }
        public string NationalityId { get; set; }
        public string Notes { get; set; }
        public string PhotoPath { get; set; }










    }
}
