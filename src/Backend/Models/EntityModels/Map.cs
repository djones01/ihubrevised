namespace Backend.Models.EntityModels
{
    #region

    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class Map : Entity
    {
        public Map() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MapId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool MapType { get; set; }

        public ICollection<MapObjectFormat> ObjectFormat { get; set; }
        public  ICollection<ProjectMap> ProjectMaps { get; set; }
        public  ICollection<Transformation> Transformations { get; set; }
    }
}