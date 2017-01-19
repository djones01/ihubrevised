﻿namespace Backend.Models.EntityModels
{
    #region

    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class Transformation : Entity
    {
        public Transformation() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TransformationId { get; set; }      
        public string Description { get; set; }

        public  Map Map { get; set; }
        public int MapId { get; set; }
        public  Rule Rule { get; set; }
        public  ICollection<Condition> Conditions { get; set; }
    }
}