namespace Backend.Models.EntityModels
{
    #region

    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class Rule : Entity
    {
        public Rule() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RuleId { get; set; }
        public string Rule_Value { get; set; }
        public string Alt_Value { get; set; }
        public string Assign_Operation { get; set; }
        public string Rule_Operation { get; set; }
         
        public  ICollection<RuleField> RuleFields { get; set; }

        public  Field Field { get; set; }
        public int FieldId { get; set; }

        public  Transformation Transformation { get; set; }
        public int TransformationId { get; set; }           
    }
}