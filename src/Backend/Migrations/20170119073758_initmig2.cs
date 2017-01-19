using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class initmig2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserFormatFileName",
                table: "ObjectFormats",
                newName: "SourceURL");

            migrationBuilder.AddColumn<bool>(
                name: "CheckTypes",
                table: "ObjectTargets",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "EvalConditions",
                table: "ObjectTargets",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "SourceFileName",
                table: "ObjectFormats",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Length",
                table: "Fields",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CheckTypes",
                table: "ObjectTargets");

            migrationBuilder.DropColumn(
                name: "EvalConditions",
                table: "ObjectTargets");

            migrationBuilder.DropColumn(
                name: "SourceFileName",
                table: "ObjectFormats");

            migrationBuilder.DropColumn(
                name: "Length",
                table: "Fields");

            migrationBuilder.RenameColumn(
                name: "SourceURL",
                table: "ObjectFormats",
                newName: "UserFormatFileName");
        }
    }
}
