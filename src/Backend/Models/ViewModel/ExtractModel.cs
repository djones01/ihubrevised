using Backend.Models.EntityModels;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.ViewModel
{
    public class ExtractModel
    {
        public bool FromBatchFiles { get; set; }
        public bool PerFileFormats { get; set; }
        public bool PreserveFileOrdering { get; set; }
        public List<FileInfoModel> FileInfos { get; set; }
        public List<ApiInfoModel> ApiInfos { get; set; }
    }

    public class FileInfoModel
    {
        public string FileName { get; set; }
        public bool BatchProcessLines { get; set; }
        public string Delimiter { get; set; }
        public string LineFormat { get; set; }
        public int StartLine { get; set; }
        public List<FixedLengthLine> FixedLengthLines { get; set; }
        public IFormFile File { get; set; }
        public int Index { get; set; }
    }

    public class ApiInfoModel
    {
        public string FileName { get; set; }
        public bool BatchProcessLines { get; set; }
        public string Delimiter { get; set; }
        public string LineFormat { get; set; }
        public int StartLine { get; set; }
        public List<FixedLengthLine> FixedLengthLines { get; set; }
        public IFormFile File { get; set; }
        public int Index { get; set; }
    }
}
