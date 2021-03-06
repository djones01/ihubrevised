﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.EntityModels
{
    public class Field
    {
        public Field() { }

        public Field(string name, string datatype, int length)
        {
            Name = name;
            Datatype = datatype;
            Length = length;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FieldId { get; set; }
        public string Datatype { get; set; }
        public string Name { get; set; }
        public int Length { get; set; }

        public ICollection<Rule> Rules { get; set; }
        public ICollection<Condition> Conditions { get; set; }
        public ICollection<RuleField> RuleFields { get; set; }
        public ICollection<ObjectFormatField> ObjectFormatFields { get; set; }
    }
}
