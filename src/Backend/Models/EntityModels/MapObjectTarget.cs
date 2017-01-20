using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.EntityModels
{
    public class MapObjectTarget
    {
        public MapObjectTarget() { }

        public ObjectTarget ObjectTarget { get; set; }
        public int ObjectTargetId { get; set; }
        public Map Map { get; set; }
        public int MapId { get; set; }
        public int SeqNum { get; set; }
    }
}
