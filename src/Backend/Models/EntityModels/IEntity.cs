namespace Backend.Models.EntityModels
{
    #region

    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public interface ILoggingEntity
    {
        string Created_By { get; set; }

        DateTime? Creation_Date { get; set; }

        DateTime? Date_Modified { get; set; }

        string Modified_By { get; set; }
    }


    public abstract class Entity : ILoggingEntity
    {
        public bool Active { get; set; }
        public bool Hidden { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime Effective_Date { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime? Creation_Date { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? Date_Modified { get; set; }

        public string Created_By { get; set; }

        public string Modified_By { get; set; }

        [Timestamp]
        public byte[] Timestamp { get; set; }
    }
}