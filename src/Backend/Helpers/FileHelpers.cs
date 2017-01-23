using Backend.Models.EntityModels;
using Backend.Models.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.Helpers
{
    public interface IFileHelpers
    {
        void CheckFilesValid(IFormFileCollection files);
        Task<List<Field>> ExtractFields(ExtractModel extractModel);
        Task<List<ObjectFormatViewModel>> ExtractObjectFormats(ExtractModel extractModel);
    }
    public class FileHelpers : IFileHelpers
    {
        public void CheckFilesValid(IFormFileCollection files)
        {
            foreach (var file in files)
            {
                if (file == null) throw new Exception("File is null");
                if (file.Length == 0) throw new Exception("File is empty");
                if ((file.ContentType != "text/csv") && (file.ContentType != "text/plain")
                    && (file.ContentType != "application/octet-stream") && (file.ContentType != "application/vnd.ms-excel")) throw new InvalidDataException("File is invalid format");
            }
        }

        public Line ExtractDelimitedLine(string line, string delimiter)
        {
            var extractedfields = new List<Field>();
            char delim = Convert.ToChar(delimiter);

            // Check if line is empty or null
            if (!String.IsNullOrWhiteSpace(line))
            {
                // Check if the specified delimiter actually occurs in the line
                if (line.Count(c => c == delim) > 0)
                {
                    var fields = line.Split(delim);
                    foreach (var field in fields) extractedfields.Add(new Field(field, "", 100));
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return null;
            }

            return new Line(line.Length, extractedfields);
        }

        public Line ExtractFixedLengthLine(string line, FixedLengthLine flls)
        {
            return null;
        }

        public async Task<List<string>> ReadAllLinesAsync(IFormFile file)
        {
            var lines = new List<string>();

            try
            {
                using (var buffer = new BufferedStream(file.OpenReadStream()))
                {
                    using (var reader = new StreamReader(buffer))
                    {
                        string line;
                        while ((line = await reader.ReadLineAsync()) != null) lines.Add(line);
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error(ex, "Error encountered while reading lines from file");
            }

            return lines;
        }

        public async Task<DataFile> GetDataFileWithRawLines(IFormFile file)
        {
            var lines = await this.ReadAllLinesAsync(file);
            return new DataFile(file.Name, lines);
        }

        public void FormatDataFileLines(DataFile dataFile, FileInfoModel fileInfo)
        {
            var line = new Line();
            // Loop through the raw lines and get the Field Lines
            for (int i = 1; i <= dataFile.RawLines.Count; i++)
            {
                if(i >= fileInfo.StartLine)
                {
                    if(fileInfo.FixedLengthLines != null)
                    {
                        if (fileInfo.FixedLengthLines.Count > 0 && fileInfo.FixedLengthLines.Any(x => x.LineIndex == i))
                        {
                            line = this.ExtractFixedLengthLine(dataFile.RawLines[i-1], fileInfo.FixedLengthLines.First(x => x.LineIndex == i));
                        }
                    }  
                    else
                    {
                        line = this.ExtractDelimitedLine(dataFile.RawLines[i-1], fileInfo.Delimiter);
                    }
                    if (line != null)
                        dataFile.Lines.Add(line);
                }   
            }
        }

        public Line CombineLines(Line combined, List<Line> lines)
        {
            try
            {
                foreach (var line in lines)
                {
                    combined.Fields.AddRange(line.Fields);
                }
            }
            catch(Exception ex)
            {
                Log.Error(ex, "An error occurred while combining lines");
            }  
            return combined;
        }

        public Line CombineLine(Line combined, Line combineWith)
        {
            try
            {
                combined.Fields.AddRange(combineWith.Fields);
            }
            catch (Exception ex)
            {
                Log.Error(ex, "An error occurred while combining lines");
            }
            return combined;
        }

        public async Task<List<DataFile>> GetDataFiles(ExtractModel extractModel)
        {
            var dataFiles = new List<DataFile>();
            await Task.Run(() => Parallel.ForEach(extractModel.FileInfos, async fileInfo =>
                {

                    var dataFile = await GetDataFileWithRawLines(fileInfo.File);
                    FormatDataFileLines(dataFile, fileInfo);
                    dataFiles.Add(dataFile);
                }
            ));
            return dataFiles;
        }

        public async Task<List<Field>> ExtractFields(ExtractModel extractModel)
        {
            var fields = new List<Field>();
            var dataFiles = await GetDataFiles(extractModel);
            if (extractModel.PreserveFileOrdering)
            {
                dataFiles.OrderByDescending(x => x.FileIndex);
                extractModel.FileInfos.OrderByDescending(x => x.Index);
            }
            var combinedLine = new Line();
            for (int i = 0; i < dataFiles.Count; i++)
            {
                if (extractModel.FileInfos[i].BatchProcessLines)
                {
                    // Combine the lines in each datafile, then up
                    CombineLines(combinedLine, dataFiles[i].Lines);
                }
                else
                {
                    // Combine only the line at the start index
                    CombineLine(combinedLine, dataFiles[i].Lines[extractModel.FileInfos[i].StartLine-1]);
                }
            }
            return combinedLine.Fields;
        }

        public async Task<List<ObjectFormatViewModel>> ExtractObjectFormats(ExtractModel extractModel)
        {
            var objectFormats = new List<ObjectFormatViewModel>();
            Line combinedLine;
            var dataFiles = await GetDataFiles(extractModel);
            if (extractModel.PreserveFileOrdering)
            {
                dataFiles.OrderByDescending(x => x.FileIndex);
            }
            if (extractModel.PerFileFormats)
            {
                // Create one or multiple formats per file
                foreach (var dataFile in dataFiles)
                {
                    combinedLine = new Line();
                    var fileInfo = extractModel.FileInfos.First(x => x.Index == dataFile.FileIndex);
                    // One format for all lines in file
                    if (fileInfo.BatchProcessLines)
                    {
                        CombineLines(combinedLine, dataFile.Lines);
                        objectFormats.Add(
                            new ObjectFormatViewModel("New Format", "Fill in Description",
                            extractModel.ApiInfos.Where(x => x.Index == dataFile.FileIndex).ToList(),
                            extractModel.FileInfos.Where(x => x.Index == dataFile.FileIndex).ToList(), combinedLine.Fields));
                    }
                    // One format per line
                    else
                    {
                        foreach(var line in dataFile.Lines)
                        {
                            objectFormats.Add(
                            new ObjectFormatViewModel("New Format", "Fill in Description",
                            extractModel.ApiInfos.Where(x => x.Index == dataFile.FileIndex).ToList(),
                            extractModel.FileInfos.Where(x => x.Index == dataFile.FileIndex).ToList(), line.Fields));
                        }       
                    }
                }
                    
            }
            else
            {
                combinedLine = new Line();
                // Create one new format as a compilation of all fields in all files
                foreach (var dataFile in dataFiles)
                {
                    // Combine the lines in each datafile, then up
                    CombineLines(combinedLine, dataFile.Lines);
                }
                objectFormats.Add(
                    new ObjectFormatViewModel("New Format", "Fill in Description",
                    extractModel.ApiInfos,
                    extractModel.FileInfos, combinedLine.Fields));
            }
            return objectFormats;
        }
    }

    public class Line
    {
        public Line()
        {
            Length = 0;
            Fields = new List<Field>();
        }
        public Line(int length, List<Field> fields)
        {
            Length = length;
            Fields = fields;
        }
        public int Length { get; set;  }
        public List<Field> Fields { get; set; }
    }

    public class DataFile
    {
        public DataFile() { }
        public DataFile(string fileName, List<string> lines)
        {
            FileName = fileName;
            RawLines = lines;
            Lines = new List<Line>();
        }
        public int FileIndex { get; set; }
        public string FileName { get; set; }
        public List<Line> Lines { get; set; }
        public List<string> RawLines { get; set; }
    }
}
