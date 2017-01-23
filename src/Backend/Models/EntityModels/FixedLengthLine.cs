using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.EntityModels
{
    public class FixedLengthLine
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FixedLengthLineId { get; set; }
        public int LineLength { get; set; }
        public int LineIndex { get; set; }
        public string FieldIndexes { get; set; }
    }
}
