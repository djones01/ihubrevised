using Backend.Models.EntityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.EntityModels
{
    public class MapObjectFormat
    {
        public MapObjectFormat() { }

        public ObjectFormat ObjectFormat { get; set; }
        public int ObjectFormatId { get; set; }
        public Map Map { get; set; }
        public int MapId { get; set; }
        public int SeqNum { get; set; }
    }
}
