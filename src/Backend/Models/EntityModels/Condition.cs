﻿namespace Backend.Models.EntityModels
{
    #region

    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class Condition : Entity
    {
        public Condition() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ConditionId { get; set; }
        public string Chain_Operation { get; set; }
        public string Cond_Value { get; set; }
        public string Left_Paren { get; set; }
        public string Operation { get; set; }
        public string Right_Paren { get; set; }
        public int SeqNum { get; set; }

        public  Field Field { get; set; }
        public int FieldId { get; set; }

        public  Transformation Transformation { get; set; }
        public int TransformationId { get; set; }
    }
}