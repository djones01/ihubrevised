using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.EntityModels
{
    public class ObjectTarget
    {
        public ObjectTarget() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ObjectTargetId { get; set; }
        public bool FileOutput { get; set; }
        public string OutputName { get; set; }
        public string OutputType { get; set; }
        public string OutputURL { get; set; }
        public bool CheckTypes { get; set; }
        public bool EvalConditions { get; set; }
        
        public ICollection<Map> ObjectFormatFields { get; set; }
    }
}
