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
   
        public ICollection<ApiInfo> ApiInfos { get; set; }
        public ICollection<FileInfo> FileInfos { get; set; }    
        
        public bool FromBatchFiles { get; set; }

        public ICollection<ObjectFormatField> ObjectFormatFields { get; set; }
        public ICollection<MapObjectFormat> MapObjectFormats { get; set; }
    }
}
