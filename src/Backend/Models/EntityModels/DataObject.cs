using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models.EntityModels
{
    public class DataObject : Entity
    {
        public DataObject() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DataObjectId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<ObjectFormat> ObjectFormats { get; set; }
        public ICollection<ObjectTarget> ObjectTargets { get; set; }
    }
}
