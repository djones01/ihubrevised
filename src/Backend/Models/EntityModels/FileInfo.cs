using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.EntityModels
{
    public class FileInfo : Entity
    {
        public FileInfo() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FileInfoId { get; set; }
        public string FileName { get; set; }
        public string FileType { get; set; }
        public bool CompressFile { get; set; }
        public int FileSizeLimit { get; set; }
        public string FileSizeLimitUnits { get; set; }
        public int RowLimit { get; set; }
        public bool BatchProcessLines { get; set; }
        public char Delimiter { get; set; }
        public int StartLine { get; set; }
        public ICollection<FixedLengthLine> FixedLengthLines { get; set; }

        [NotMapped]
        public IFormFile extractFile { get; set; }
        
        public int ObjectFormatId { get; set; }
        public ObjectFormat ObjectFormat { get; set; }
        public int ObjectTargetId { get; set; }
        public ObjectTarget ObjectTarget { get; set; }
    }
}
