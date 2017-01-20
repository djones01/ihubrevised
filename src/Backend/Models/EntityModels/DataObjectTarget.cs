using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.EntityModels
{
    public class DataObjectTarget
    {
        public DataObjectTarget() { }

        public ObjectTarget ObjectTarget { get; set; }
        public int ObjectTargetId { get; set; }
        public DataObject DataObject { get; set; }
        public int DataObjectId { get; set; }
    }
}
