namespace Backend.Models.EntityModels
{
    #region

    using System;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Http;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using System.Reflection;
    using System.Collections.Generic;

    #endregion

    public class GTiHubContext : IdentityDbContext<ApplicationUser>
    {
        public GTiHubContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Condition> Conditions { get; set; }
        public DbSet<DataObject> DataObjects { get; set; }
        public DbSet<DataObjectFormat> DataObjectFormats { get; set; }
        public DbSet<DataObjectTarget> DataObjectTargets { get; set; }
        public DbSet<Field> Fields { get; set; }
        public DbSet<FixedLengthLine> FixedLengthLines { get; set; }
        public DbSet<Map> Maps { get; set; }
        public DbSet<MapObjectFormat> MapObjectFormats { get; set; }
        public DbSet<MapObjectTarget> MapObjectTargets { get; set; }
        public DbSet<ObjectFormat> ObjectFormats { get; set; }
        public DbSet<ObjectFormatField> ObjectFormatFields { get; set; }
        public DbSet<ObjectTarget> ObjectTargets { get; set; }
        public DbSet<ProjectMap> ProjectMaps { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Rule> Rules { get; set; }
        public DbSet<RuleField> RuleFields { get; set; }
        public DbSet<Transformation> Transformations { get; set; }
        public DbSet<UserProjectSec> UserProjectSecs { get; set; }

        public override int SaveChanges()
        {
            this.LogDateAndUser();
            return base.SaveChanges();
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            this.LogDateAndUser();
            return await base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<DataObjectFormat>().HasKey(t => new { t.DataObjectId, t.ObjectFormatId });
            modelBuilder.Entity<DataObjectTarget>().HasKey(t => new { t.DataObjectId, t.ObjectTargetId });
            modelBuilder.Entity<ProjectMap>().HasKey(t => new { t.ProjectId, t.MapId });
            modelBuilder.Entity<ObjectFormatField>().HasKey(t => new { t.ObjectFormatId, t.FieldId });
            modelBuilder.Entity<MapObjectTarget>().HasKey(t => new { t.MapId, t.ObjectTargetId });
            modelBuilder.Entity<MapObjectFormat>().HasKey(t => new { t.MapId, t.ObjectFormatId });
            modelBuilder.Entity<RuleField>().HasOne(i => i.Field).WithMany(i => i.RuleFields).OnDelete(DeleteBehavior.Restrict);
        }

        private void LogDateAndUser()
        {
            var entities =
                this.ChangeTracker.Entries()
                    .Where(x => x.Entity is ILoggingEntity
                            && ((x.State == EntityState.Added) || (x.State == EntityState.Modified)));

            var currentUser = "Anonymous";

            foreach (var entity in entities)
            {
                if (entity.State == EntityState.Added)
                {
                    ((ILoggingEntity)entity.Entity).Creation_Date = DateTime.Now;
                    ((ILoggingEntity)entity.Entity).Created_By = currentUser;
                }

                ((ILoggingEntity)entity.Entity).Date_Modified = DateTime.Now;
                ((ILoggingEntity)entity.Entity).Modified_By = currentUser;
            }
        }
    }
}