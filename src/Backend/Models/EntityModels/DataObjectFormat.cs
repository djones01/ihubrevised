using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.EntityModels
{
    public class DataObjectFormat
    {
        public DataObjectFormat() { }

        public ObjectFormat ObjectFormat { get; set; }
        public int ObjectFormatId { get; set; }
        public DataObject DataObject { get; set; }
        public int DataObjectId { get; set; }
    }
}
