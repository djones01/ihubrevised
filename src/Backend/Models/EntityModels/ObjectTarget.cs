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
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<ApiInfo> ApiInfos { get; set; }
        public ICollection<FileInfo> FileInfos { get; set; }

        public bool CheckTypes { get; set; }
        public bool EvalConditions { get; set; }
        public bool StopOnError { get; set; }

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

        public ICollection<MapObjectTarget> MapObjectTargets { get; set; }
        public ICollection<DataObjectTarget> DataObjectTargets { get; set; }
    }
}
