namespace Backend.Models.EntityModels
{
    #region

    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class RuleField : Entity
    {
        public RuleField() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RuleFieldId { get; set; }
        public string Prepend { get; set; }
        public string Append { get; set; }
        public string Custom_Format { get; set; }
        public bool Trim { get; set; }
        public int SeqNum { get; set; }

        public  Rule Rule { get; set; }
        public int RuleId { get; set; }

        public  Field Field { get; set; }
        public int FieldId { get; set; }
    }
}