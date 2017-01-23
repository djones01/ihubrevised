using Backend.Models.EntityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.ViewModel
{
    public class ObjectFormatViewModel
    {
        public ObjectFormatViewModel(string name, string description, List<ApiInfoModel> apiInfos, List<FileInfoModel> fileInfos, List<Field> fields)
        {
            Name = name;
            Description = description;
            ApiInfos = apiInfos;
            FileInfos = fileInfos;
            Fields = fields;
        }

        public string Name { get; set; }
        public string Description { get; set; }

        public List<ApiInfoModel> ApiInfos { get; set; }
        public List<FileInfoModel> FileInfos { get; set; }

        public bool FromBatchFiles { get; set; }

        public List<Field> Fields { get; set; }
    }
}
