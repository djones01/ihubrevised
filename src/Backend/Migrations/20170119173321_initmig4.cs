using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class initmig4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FileInfo_ObjectTargets_ObjectTargetId",
                table: "FileInfo");

            migrationBuilder.AlterColumn<int>(
                name: "ObjectTargetId",
                table: "FileInfo",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_FileInfo_ObjectTargets_ObjectTargetId",
                table: "FileInfo",
                column: "ObjectTargetId",
                principalTable: "ObjectTargets",
                principalColumn: "ObjectTargetId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FileInfo_ObjectTargets_ObjectTargetId",
                table: "FileInfo");

            migrationBuilder.AlterColumn<int>(
                name: "ObjectTargetId",
                table: "FileInfo",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_FileInfo_ObjectTargets_ObjectTargetId",
                table: "FileInfo",
                column: "ObjectTargetId",
                principalTable: "ObjectTargets",
                principalColumn: "ObjectTargetId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
