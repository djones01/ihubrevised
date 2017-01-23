using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.Models.ViewModel;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Backend.Helpers;
using Serilog;
using System.IO;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    public class FilesController : Controller
    {
        private readonly ITransformHelpers _transformHelpers;
        private readonly IFileHelpers _fileHelpers;

        public FilesController(ITransformHelpers transformHelpers, IFileHelpers fileHelpers)
        {
            this._transformHelpers = transformHelpers;
            this._fileHelpers = fileHelpers;
        }

        // POST api/values
        [HttpPost("Extract/Fields")]
        public async Task<IActionResult> ExtractFields(IFormCollection form)
        {
            if (!this.Request.ContentType.Contains("multipart/form-data")) return new UnsupportedMediaTypeResult();

            try
            {
                var model = new ExtractModel();
                _fileHelpers.CheckFilesValid(form.Files);
                var fromBatchFiles = Convert.ToBoolean(form["fromBatchFiles"]);
                var preserveFileOrdering = Convert.ToBoolean(form["preserveFileOrdering"]);
                var fileInfos = new List<FileInfoModel>();
                for(int i = 0; i < form.Files.Count; i++)
                {
                    var fileInfo = JsonConvert.DeserializeObject<FileInfoModel>(form["fileInfo" + i]);
                    fileInfo.File = form.Files[i];
                    fileInfos.Add(fileInfo);
                }
                model.FromBatchFiles = fromBatchFiles;
                model.PreserveFileOrdering = preserveFileOrdering;
                model.FileInfos = fileInfos;
                var fields = await this._fileHelpers.ExtractFields(model);
                return new ObjectResult(fields);    
            }
            catch (Exception ex)
            {
                Log.Error(ex, "Extracting sources in batch mode failed");
                if (ex is InvalidDataException)
                {
                    Log.Error("Format of file invalid");
                }
            }

            return new BadRequestResult();
        }        
    }
}
