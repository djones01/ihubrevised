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

        public int FieldCount {
            get
            {
                return this.ObjectFormatFields.Count;
            }
            set
            {
                FieldCount = this.ObjectFormatFields.Count;
            }  
        }

        public int NumSourceFiles
        {
            get
            {
                return this.FileInfos.Count;
            }
            set
            {
                NumSourceFiles = this.FileInfos.Count;
            }
        }

        public int NumSourceApis
        {
            get
            {
                return this.ApiInfos.Count;
            }
            set
            {
                NumSourceFiles = this.ApiInfos.Count;
            }
        }

        public int TotalSourceCount
        {
            get
            {
                return NumSourceFiles + NumSourceApis;
            }
            set
            {
                TotalSourceCount = NumSourceApis + NumSourceFiles;
            }
        }

        public ICollection<ObjectFormatField> ObjectFormatFields { get; set; }
        public ICollection<MapObjectFormat> MapObjectFormats { get; set; }
    }
}
