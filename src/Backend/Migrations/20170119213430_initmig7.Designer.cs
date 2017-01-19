using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Backend.Models.EntityModels;

namespace Backend.Migrations
{
    [DbContext(typeof(GTiHubContext))]
    [Migration("20170119213430_initmig7")]
    partial class initmig7
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Backend.Models.EntityModels.ApiInfo", b =>
                {
                    b.Property<int>("ApiInfoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FileFormat");

                    b.Property<string>("FileName");

                    b.Property<int>("ObjectFormatId");

                    b.Property<int?>("ObjectTargetId");

                    b.Property<string>("Url");

                    b.HasKey("ApiInfoId");

                    b.HasIndex("ObjectFormatId");

                    b.HasIndex("ObjectTargetId");

                    b.ToTable("ApiInfo");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<int?>("ClientId");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("Modified_By");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<string>("Title");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Client", b =>
                {
                    b.Property<int>("ClientId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<bool>("Hidden");

                    b.Property<string>("Industry");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("ClientId");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Condition", b =>
                {
                    b.Property<int>("ConditionId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Chain_Operation");

                    b.Property<string>("Cond_Value");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<int>("FieldId");

                    b.Property<bool>("Hidden");

                    b.Property<string>("Left_Paren");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Operation");

                    b.Property<string>("Right_Paren");

                    b.Property<int>("SeqNum");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int>("TransformationId");

                    b.HasKey("ConditionId");

                    b.HasIndex("FieldId");

                    b.HasIndex("TransformationId");

                    b.ToTable("Conditions");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.DataObject", b =>
                {
                    b.Property<int>("DataObjectId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<bool>("Hidden");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("DataObjectId");

                    b.ToTable("DataObjects");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Field", b =>
                {
                    b.Property<int>("FieldId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Datatype");

                    b.Property<int>("Length");

                    b.Property<string>("Name");

                    b.HasKey("FieldId");

                    b.ToTable("Fields");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.FileInfo", b =>
                {
                    b.Property<int>("FileInfoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("CompressFile");

                    b.Property<string>("FileName");

                    b.Property<int>("FileSizeLimit");

                    b.Property<string>("FileSizeLimitUnits");

                    b.Property<string>("FileType");

                    b.Property<int>("ObjectFormatId");

                    b.Property<int>("ObjectTargetId");

                    b.Property<int>("RowLimit");

                    b.HasKey("FileInfoId");

                    b.HasIndex("ObjectFormatId");

                    b.HasIndex("ObjectTargetId");

                    b.ToTable("FileInfo");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Map", b =>
                {
                    b.Property<int>("MapId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<bool>("Hidden");

                    b.Property<bool>("MapType");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<int?>("ObjectTargetId");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("MapId");

                    b.HasIndex("ObjectTargetId");

                    b.ToTable("Maps");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.MapObjectFormat", b =>
                {
                    b.Property<int>("MapId");

                    b.Property<int>("ObjectFormatId");

                    b.Property<int>("SeqNum");

                    b.HasKey("MapId", "ObjectFormatId");

                    b.HasIndex("ObjectFormatId");

                    b.ToTable("MapObjectFormats");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.MapObjectTarget", b =>
                {
                    b.Property<int>("MapId");

                    b.Property<int>("ObjectTargetId");

                    b.HasKey("MapId", "ObjectTargetId");

                    b.HasIndex("ObjectTargetId");

                    b.ToTable("MapObjectTargets");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ObjectFormat", b =>
                {
                    b.Property<int>("ObjectFormatId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("AutoProcessed");

                    b.Property<int?>("DataObjectId");

                    b.Property<string>("Description");

                    b.Property<bool>("FixedLength");

                    b.Property<bool>("FromBatch");

                    b.Property<int>("Length");

                    b.Property<string>("Name");

                    b.HasKey("ObjectFormatId");

                    b.HasIndex("DataObjectId");

                    b.ToTable("ObjectFormats");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ObjectFormatField", b =>
                {
                    b.Property<int>("ObjectFormatId");

                    b.Property<int>("FieldId");

                    b.Property<int>("SeqNum");

                    b.HasKey("ObjectFormatId", "FieldId");

                    b.HasIndex("FieldId");

                    b.ToTable("ObjectFormatFields");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ObjectTarget", b =>
                {
                    b.Property<int>("ObjectTargetId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("CheckTypes");

                    b.Property<int?>("DataObjectId");

                    b.Property<string>("Description");

                    b.Property<bool>("EvalConditions");

                    b.Property<string>("Name");

                    b.Property<bool>("StopOnError");

                    b.HasKey("ObjectTargetId");

                    b.HasIndex("DataObjectId");

                    b.ToTable("ObjectTargets");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<int>("ClientId");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<bool>("Hidden");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<string>("Project_Type");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("ProjectId");

                    b.HasIndex("ClientId");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ProjectMap", b =>
                {
                    b.Property<int>("ProjectId");

                    b.Property<int>("MapId");

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<bool>("Hidden");

                    b.Property<string>("Modified_By");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("ProjectId", "MapId");

                    b.HasIndex("MapId");

                    b.ToTable("ProjectMaps");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Rule", b =>
                {
                    b.Property<int>("RuleId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Alt_Value");

                    b.Property<string>("Assign_Operation");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<int>("FieldId");

                    b.Property<bool>("Hidden");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Rule_Operation");

                    b.Property<string>("Rule_Value");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int>("TransformationId");

                    b.HasKey("RuleId");

                    b.HasIndex("FieldId");

                    b.HasIndex("TransformationId")
                        .IsUnique();

                    b.ToTable("Rules");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.RuleField", b =>
                {
                    b.Property<int>("RuleFieldId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Append");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<string>("Custom_Format");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<int>("FieldId");

                    b.Property<bool>("Hidden");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Prepend");

                    b.Property<int>("RuleId");

                    b.Property<int>("SeqNum");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<bool>("Trim");

                    b.HasKey("RuleFieldId");

                    b.HasIndex("FieldId");

                    b.HasIndex("RuleId");

                    b.ToTable("RuleFields");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Transformation", b =>
                {
                    b.Property<int>("TransformationId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<bool>("Hidden");

                    b.Property<int>("MapId");

                    b.Property<string>("Modified_By");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("TransformationId");

                    b.HasIndex("MapId");

                    b.ToTable("Transformations");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.UserProjectSec", b =>
                {
                    b.Property<int>("UserProjSecId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Access_Level");

                    b.Property<bool>("Active");

                    b.Property<bool>("Active_On_Project");

                    b.Property<DateTime>("Added_Date");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<bool>("Hidden");

                    b.Property<string>("Modified_By");

                    b.Property<int>("ProjectId");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int>("UserId");

                    b.Property<string>("UserId1");

                    b.HasKey("UserProjSecId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("UserId1");

                    b.ToTable("UserProjectSecs");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ApiInfo", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.ObjectFormat", "ObjectFormat")
                        .WithMany("ApiInfos")
                        .HasForeignKey("ObjectFormatId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.ObjectTarget")
                        .WithMany("ApiInfos")
                        .HasForeignKey("ObjectTargetId");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ApplicationUser", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Client")
                        .WithMany("Users")
                        .HasForeignKey("ClientId");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Condition", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Field", "Field")
                        .WithMany("Conditions")
                        .HasForeignKey("FieldId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.Transformation", "Transformation")
                        .WithMany("Conditions")
                        .HasForeignKey("TransformationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.FileInfo", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.ObjectFormat", "ObjectFormat")
                        .WithMany("FileInfos")
                        .HasForeignKey("ObjectFormatId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.ObjectTarget", "ObjectTarget")
                        .WithMany("FileInfos")
                        .HasForeignKey("ObjectTargetId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Map", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.ObjectTarget")
                        .WithMany("ObjectFormatFields")
                        .HasForeignKey("ObjectTargetId");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.MapObjectFormat", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Map", "Map")
                        .WithMany("ObjectFormat")
                        .HasForeignKey("MapId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.ObjectFormat", "ObjectFormat")
                        .WithMany("MapObjectFormats")
                        .HasForeignKey("ObjectFormatId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.MapObjectTarget", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Map", "Map")
                        .WithMany()
                        .HasForeignKey("MapId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.ObjectTarget", "ObjectTarget")
                        .WithMany()
                        .HasForeignKey("ObjectTargetId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ObjectFormat", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.DataObject")
                        .WithMany("ObjectFormats")
                        .HasForeignKey("DataObjectId");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ObjectFormatField", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Field", "Field")
                        .WithMany("ObjectFormatFields")
                        .HasForeignKey("FieldId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.ObjectFormat", "ObjectFormat")
                        .WithMany("ObjectFormatFields")
                        .HasForeignKey("ObjectFormatId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ObjectTarget", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.DataObject")
                        .WithMany("ObjectTargets")
                        .HasForeignKey("DataObjectId");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Project", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Client", "Client")
                        .WithMany("Projects")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ProjectMap", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Map", "Map")
                        .WithMany("ProjectMaps")
                        .HasForeignKey("MapId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.Project", "Project")
                        .WithMany("ProjectMaps")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Rule", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Field", "Field")
                        .WithMany("Rules")
                        .HasForeignKey("FieldId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.Transformation", "Transformation")
                        .WithOne("Rule")
                        .HasForeignKey("Backend.Models.EntityModels.Rule", "TransformationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.RuleField", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Field", "Field")
                        .WithMany("RuleFields")
                        .HasForeignKey("FieldId");

                    b.HasOne("Backend.Models.EntityModels.Rule", "Rule")
                        .WithMany("RuleFields")
                        .HasForeignKey("RuleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Transformation", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Map", "Map")
                        .WithMany("Transformations")
                        .HasForeignKey("MapId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.UserProjectSec", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Project", "Project")
                        .WithMany("UserProjectSecs")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.ApplicationUser", "User")
                        .WithMany("UserProjectSecs")
                        .HasForeignKey("UserId1");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Claims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.ApplicationUser")
                        .WithMany("Claims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.ApplicationUser")
                        .WithMany("Logins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.ApplicationUser")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
