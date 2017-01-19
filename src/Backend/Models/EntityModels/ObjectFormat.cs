using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models.EntityModels
{
    public class ObjectFormat
    {
        public ObjectFormat() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ObjectFormatId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string SourceFileName { get; set; }
        public string SourceURL { get; set; }
        public bool FromBatch { get; set; }
        public bool AutoProcessed { get; set; }
        public bool FixedLength { get; set; }
        public int Length { get; set; }

        public ICollection<ObjectFormatField> ObjectFormatFields { get; set; }
        public ICollection<MapObjectFormat> MapObjectFormats { get; set; }
    }
}
