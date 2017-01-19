using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class initmig5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "ObjectTargets",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "ObjectTargets",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "ObjectTargets");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "ObjectTargets");
        }
    }
}
