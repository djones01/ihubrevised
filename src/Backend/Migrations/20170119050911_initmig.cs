using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Backend.Migrations
{
    public partial class initmig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    ClientId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Effective_Date = table.Column<DateTime>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    Industry = table.Column<string>(nullable: true),
                    Modified_By = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.ClientId);
                });

            migrationBuilder.CreateTable(
                name: "DataObjects",
                columns: table => new
                {
                    DataObjectId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Effective_Date = table.Column<DateTime>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    Modified_By = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DataObjects", x => x.DataObjectId);
                });

            migrationBuilder.CreateTable(
                name: "Fields",
                columns: table => new
                {
                    FieldId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Datatype = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fields", x => x.FieldId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    ClientId = table.Column<int>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    Modified_By = table.Column<string>(nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    PasswordHash = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    SecurityStamp = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    Version = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_Clients_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clients",
                        principalColumn: "ClientId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    ProjectId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    ClientId = table.Column<int>(nullable: false),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Effective_Date = table.Column<DateTime>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    Modified_By = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Project_Type = table.Column<string>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.ProjectId);
                    table.ForeignKey(
                        name: "FK_Projects_Clients_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clients",
                        principalColumn: "ClientId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ObjectFormats",
                columns: table => new
                {
                    ObjectFormatId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AutoProcessed = table.Column<bool>(nullable: false),
                    DataObjectId = table.Column<int>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    FixedLength = table.Column<bool>(nullable: false),
                    FromBatch = table.Column<bool>(nullable: false),
                    Length = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    UserFormatFileName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ObjectFormats", x => x.ObjectFormatId);
                    table.ForeignKey(
                        name: "FK_ObjectFormats_DataObjects_DataObjectId",
                        column: x => x.DataObjectId,
                        principalTable: "DataObjects",
                        principalColumn: "DataObjectId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ObjectTargets",
                columns: table => new
                {
                    ObjectTargetId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DataObjectId = table.Column<int>(nullable: true),
                    FileOutput = table.Column<bool>(nullable: false),
                    OutputName = table.Column<string>(nullable: true),
                    OutputType = table.Column<string>(nullable: true),
                    OutputURL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ObjectTargets", x => x.ObjectTargetId);
                    table.ForeignKey(
                        name: "FK_ObjectTargets_DataObjects_DataObjectId",
                        column: x => x.DataObjectId,
                        principalTable: "DataObjects",
                        principalColumn: "DataObjectId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserProjectSecs",
                columns: table => new
                {
                    UserProjSecId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Access_Level = table.Column<int>(nullable: false),
                    Active = table.Column<bool>(nullable: false),
                    Active_On_Project = table.Column<bool>(nullable: false),
                    Added_Date = table.Column<DateTime>(nullable: false),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Effective_Date = table.Column<DateTime>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    Modified_By = table.Column<string>(nullable: true),
                    ProjectId = table.Column<int>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    UserId = table.Column<int>(nullable: false),
                    UserId1 = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProjectSecs", x => x.UserProjSecId);
                    table.ForeignKey(
                        name: "FK_UserProjectSecs_Projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "Projects",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserProjectSecs_AspNetUsers_UserId1",
                        column: x => x.UserId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ObjectFormatFields",
                columns: table => new
                {
                    ObjectFormatId = table.Column<int>(nullable: false),
                    FieldId = table.Column<int>(nullable: false),
                    SeqNum = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ObjectFormatFields", x => new { x.ObjectFormatId, x.FieldId });
                    table.ForeignKey(
                        name: "FK_ObjectFormatFields_Fields_FieldId",
                        column: x => x.FieldId,
                        principalTable: "Fields",
                        principalColumn: "FieldId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ObjectFormatFields_ObjectFormats_ObjectFormatId",
                        column: x => x.ObjectFormatId,
                        principalTable: "ObjectFormats",
                        principalColumn: "ObjectFormatId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Maps",
                columns: table => new
                {
                    MapId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Effective_Date = table.Column<DateTime>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    MapType = table.Column<bool>(nullable: false),
                    Modified_By = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    ObjectTargetId = table.Column<int>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Maps", x => x.MapId);
                    table.ForeignKey(
                        name: "FK_Maps_ObjectTargets_ObjectTargetId",
                        column: x => x.ObjectTargetId,
                        principalTable: "ObjectTargets",
                        principalColumn: "ObjectTargetId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MapObjectFormats",
                columns: table => new
                {
                    MapId = table.Column<int>(nullable: false),
                    ObjectFormatId = table.Column<int>(nullable: false),
                    SeqNum = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MapObjectFormats", x => new { x.MapId, x.ObjectFormatId });
                    table.ForeignKey(
                        name: "FK_MapObjectFormats_Maps_MapId",
                        column: x => x.MapId,
                        principalTable: "Maps",
                        principalColumn: "MapId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MapObjectFormats_ObjectFormats_ObjectFormatId",
                        column: x => x.ObjectFormatId,
                        principalTable: "ObjectFormats",
                        principalColumn: "ObjectFormatId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MapObjectTargets",
                columns: table => new
                {
                    MapId = table.Column<int>(nullable: false),
                    ObjectTargetId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MapObjectTargets", x => new { x.MapId, x.ObjectTargetId });
                    table.ForeignKey(
                        name: "FK_MapObjectTargets_Maps_MapId",
                        column: x => x.MapId,
                        principalTable: "Maps",
                        principalColumn: "MapId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MapObjectTargets_ObjectTargets_ObjectTargetId",
                        column: x => x.ObjectTargetId,
                        principalTable: "ObjectTargets",
                        principalColumn: "ObjectTargetId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProjectMaps",
                columns: table => new
                {
                    ProjectId = table.Column<int>(nullable: false),
                    MapId = table.Column<int>(nullable: false),
                    Active = table.Column<bool>(nullable: false),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Effective_Date = table.Column<DateTime>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    Modified_By = table.Column<string>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectMaps", x => new { x.ProjectId, x.MapId });
                    table.ForeignKey(
                        name: "FK_ProjectMaps_Maps_MapId",
                        column: x => x.MapId,
                        principalTable: "Maps",
                        principalColumn: "MapId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProjectMaps_Projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "Projects",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Transformations",
                columns: table => new
                {
                    TransformationId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Effective_Date = table.Column<DateTime>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    MapId = table.Column<int>(nullable: false),
                    Modified_By = table.Column<string>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transformations", x => x.TransformationId);
                    table.ForeignKey(
                        name: "FK_Transformations_Maps_MapId",
                        column: x => x.MapId,
                        principalTable: "Maps",
                        principalColumn: "MapId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Conditions",
                columns: table => new
                {
                    ConditionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Chain_Operation = table.Column<string>(nullable: true),
                    Cond_Value = table.Column<string>(nullable: true),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Effective_Date = table.Column<DateTime>(nullable: false),
                    FieldId = table.Column<int>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    Left_Paren = table.Column<string>(nullable: true),
                    Modified_By = table.Column<string>(nullable: true),
                    Operation = table.Column<string>(nullable: true),
                    Right_Paren = table.Column<string>(nullable: true),
                    SeqNum = table.Column<int>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    TransformationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Conditions", x => x.ConditionId);
                    table.ForeignKey(
                        name: "FK_Conditions_Fields_FieldId",
                        column: x => x.FieldId,
                        principalTable: "Fields",
                        principalColumn: "FieldId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Conditions_Transformations_TransformationId",
                        column: x => x.TransformationId,
                        principalTable: "Transformations",
                        principalColumn: "TransformationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Rules",
                columns: table => new
                {
                    RuleId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Alt_Value = table.Column<string>(nullable: true),
                    Assign_Operation = table.Column<string>(nullable: true),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Effective_Date = table.Column<DateTime>(nullable: false),
                    FieldId = table.Column<int>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    Modified_By = table.Column<string>(nullable: true),
                    Rule_Operation = table.Column<string>(nullable: true),
                    Rule_Value = table.Column<string>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    TransformationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rules", x => x.RuleId);
                    table.ForeignKey(
                        name: "FK_Rules_Fields_FieldId",
                        column: x => x.FieldId,
                        principalTable: "Fields",
                        principalColumn: "FieldId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Rules_Transformations_TransformationId",
                        column: x => x.TransformationId,
                        principalTable: "Transformations",
                        principalColumn: "TransformationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RuleFields",
                columns: table => new
                {
                    RuleFieldId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Append = table.Column<string>(nullable: true),
                    Created_By = table.Column<string>(nullable: true),
                    Creation_Date = table.Column<DateTime>(nullable: true),
                    Custom_Format = table.Column<string>(nullable: true),
                    Date_Modified = table.Column<DateTime>(nullable: true),
                    Effective_Date = table.Column<DateTime>(nullable: false),
                    FieldId = table.Column<int>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    Modified_By = table.Column<string>(nullable: true),
                    Prepend = table.Column<string>(nullable: true),
                    RuleId = table.Column<int>(nullable: false),
                    SeqNum = table.Column<int>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    Trim = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RuleFields", x => x.RuleFieldId);
                    table.ForeignKey(
                        name: "FK_RuleFields_Fields_FieldId",
                        column: x => x.FieldId,
                        principalTable: "Fields",
                        principalColumn: "FieldId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_RuleFields_Rules_RuleId",
                        column: x => x.RuleId,
                        principalTable: "Rules",
                        principalColumn: "RuleId",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_ClientId",
                table: "AspNetUsers",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Conditions_FieldId",
                table: "Conditions",
                column: "FieldId");

            migrationBuilder.CreateIndex(
                name: "IX_Conditions_TransformationId",
                table: "Conditions",
                column: "TransformationId");

            migrationBuilder.CreateIndex(
                name: "IX_Maps_ObjectTargetId",
                table: "Maps",
                column: "ObjectTargetId");

            migrationBuilder.CreateIndex(
                name: "IX_MapObjectFormats_ObjectFormatId",
                table: "MapObjectFormats",
                column: "ObjectFormatId");

            migrationBuilder.CreateIndex(
                name: "IX_MapObjectTargets_ObjectTargetId",
                table: "MapObjectTargets",
                column: "ObjectTargetId");

            migrationBuilder.CreateIndex(
                name: "IX_ObjectFormats_DataObjectId",
                table: "ObjectFormats",
                column: "DataObjectId");

            migrationBuilder.CreateIndex(
                name: "IX_ObjectFormatFields_FieldId",
                table: "ObjectFormatFields",
                column: "FieldId");

            migrationBuilder.CreateIndex(
                name: "IX_ObjectTargets_DataObjectId",
                table: "ObjectTargets",
                column: "DataObjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_ClientId",
                table: "Projects",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectMaps_MapId",
                table: "ProjectMaps",
                column: "MapId");

            migrationBuilder.CreateIndex(
                name: "IX_Rules_FieldId",
                table: "Rules",
                column: "FieldId");

            migrationBuilder.CreateIndex(
                name: "IX_Rules_TransformationId",
                table: "Rules",
                column: "TransformationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RuleFields_FieldId",
                table: "RuleFields",
                column: "FieldId");

            migrationBuilder.CreateIndex(
                name: "IX_RuleFields_RuleId",
                table: "RuleFields",
                column: "RuleId");

            migrationBuilder.CreateIndex(
                name: "IX_Transformations_MapId",
                table: "Transformations",
                column: "MapId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProjectSecs_ProjectId",
                table: "UserProjectSecs",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProjectSecs_UserId1",
                table: "UserProjectSecs",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Conditions");

            migrationBuilder.DropTable(
                name: "MapObjectFormats");

            migrationBuilder.DropTable(
                name: "MapObjectTargets");

            migrationBuilder.DropTable(
                name: "ObjectFormatFields");

            migrationBuilder.DropTable(
                name: "ProjectMaps");

            migrationBuilder.DropTable(
                name: "RuleFields");

            migrationBuilder.DropTable(
                name: "UserProjectSecs");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "ObjectFormats");

            migrationBuilder.DropTable(
                name: "Rules");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Fields");

            migrationBuilder.DropTable(
                name: "Transformations");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Maps");

            migrationBuilder.DropTable(
                name: "ObjectTargets");

            migrationBuilder.DropTable(
                name: "DataObjects");
        }
    }
}
