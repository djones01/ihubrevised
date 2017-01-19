using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class initmig7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SourceFileType",
                table: "FileInfo",
                newName: "FileType");

            migrationBuilder.RenameColumn(
                name: "SourceFileName",
                table: "FileInfo",
                newName: "FileSizeLimitUnits");

            migrationBuilder.RenameColumn(
                name: "FileSourceInfoId",
                table: "FileInfo",
                newName: "FileInfoId");

            migrationBuilder.RenameColumn(
                name: "SourceURL",
                table: "ApiInfo",
                newName: "Url");

            migrationBuilder.AddColumn<bool>(
                name: "CompressFile",
                table: "FileInfo",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "FileInfo",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FileSizeLimit",
                table: "FileInfo",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RowLimit",
                table: "FileInfo",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "FileFormat",
                table: "ApiInfo",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "ApiInfo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompressFile",
                table: "FileInfo");

            migrationBuilder.DropColumn(
                name: "FileName",
                table: "FileInfo");

            migrationBuilder.DropColumn(
                name: "FileSizeLimit",
                table: "FileInfo");

            migrationBuilder.DropColumn(
                name: "RowLimit",
                table: "FileInfo");

            migrationBuilder.DropColumn(
                name: "FileFormat",
                table: "ApiInfo");

            migrationBuilder.DropColumn(
                name: "FileName",
                table: "ApiInfo");

            migrationBuilder.RenameColumn(
                name: "FileType",
                table: "FileInfo",
                newName: "SourceFileType");

            migrationBuilder.RenameColumn(
                name: "FileSizeLimitUnits",
                table: "FileInfo",
                newName: "SourceFileName");

            migrationBuilder.RenameColumn(
                name: "FileInfoId",
                table: "FileInfo",
                newName: "FileSourceInfoId");

            migrationBuilder.RenameColumn(
                name: "Url",
                table: "ApiInfo",
                newName: "SourceURL");
        }
    }
}
