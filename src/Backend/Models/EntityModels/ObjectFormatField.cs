using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.EntityModels
{
    public class ObjectFormatField
    {
        public ObjectFormatField() { }

        public ObjectFormat ObjectFormat { get; set; }
        public int ObjectFormatId { get; set; }
        public Field Field { get; set; }
        public int FieldId { get; set; }
        public int SeqNum { get; set; }
        
    }
}
