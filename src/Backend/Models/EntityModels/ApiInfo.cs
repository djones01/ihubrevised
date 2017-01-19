using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.EntityModels
{
    public class ApiInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ApiInfoId { get; set; }
        public string Url { get; set; }
        public string FileName { get; set; }
        public string FileFormat { get; set; }


        public int ObjectFormatId { get; set; }
        public ObjectFormat ObjectFormat { get; set; }
    }
}
