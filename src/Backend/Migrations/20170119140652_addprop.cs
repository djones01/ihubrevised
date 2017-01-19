using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Backend.Migrations
{
    public partial class addprop : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SourceFileName",
                table: "ObjectFormats");

            migrationBuilder.DropColumn(
                name: "SourceURL",
                table: "ObjectFormats");

            migrationBuilder.CreateTable(
                name: "ApiSourceInfo",
                columns: table => new
                {
                    ApiSourceInfoId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ObjectFormatId = table.Column<int>(nullable: false),
                    SourceURL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApiSourceInfo", x => x.ApiSourceInfoId);
                    table.ForeignKey(
                        name: "FK_ApiSourceInfo_ObjectFormats_ObjectFormatId",
                        column: x => x.ObjectFormatId,
                        principalTable: "ObjectFormats",
                        principalColumn: "ObjectFormatId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FileSourceInfo",
                columns: table => new
                {
                    FileSourceInfoId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ObjectFormatId = table.Column<int>(nullable: false),
                    SourceFileName = table.Column<string>(nullable: true),
                    SourceFileType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileSourceInfo", x => x.FileSourceInfoId);
                    table.ForeignKey(
                        name: "FK_FileSourceInfo_ObjectFormats_ObjectFormatId",
                        column: x => x.ObjectFormatId,
                        principalTable: "ObjectFormats",
                        principalColumn: "ObjectFormatId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ApiSourceInfo_ObjectFormatId",
                table: "ApiSourceInfo",
                column: "ObjectFormatId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FileSourceInfo_ObjectFormatId",
                table: "FileSourceInfo",
                column: "ObjectFormatId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApiSourceInfo");

            migrationBuilder.DropTable(
                name: "FileSourceInfo");

            migrationBuilder.AddColumn<string>(
                name: "SourceFileName",
                table: "ObjectFormats",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SourceURL",
                table: "ObjectFormats",
                nullable: true);
        }
    }
}
