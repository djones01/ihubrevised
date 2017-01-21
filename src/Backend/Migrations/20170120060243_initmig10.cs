﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class initmig10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AutoProcessed",
                table: "ObjectFormats");

            migrationBuilder.DropColumn(
                name: "FixedLength",
                table: "ObjectFormats");

            migrationBuilder.DropColumn(
                name: "Length",
                table: "ObjectFormats");

            migrationBuilder.RenameColumn(
                name: "FromBatch",
                table: "ObjectFormats",
                newName: "FromBatchFiles");

            migrationBuilder.AddColumn<bool>(
                name: "BatchProcessLines",
                table: "FileInfo",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<char>(
                name: "Delimiter",
                table: "FileInfo",
                nullable: false,
                defaultValue: ' ');

            migrationBuilder.AddColumn<bool>(
                name: "FixedLength",
                table: "FileInfo",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Length",
                table: "FileInfo",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StartRow",
                table: "FileInfo",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BatchProcessLines",
                table: "FileInfo");

            migrationBuilder.DropColumn(
                name: "Delimiter",
                table: "FileInfo");

            migrationBuilder.DropColumn(
                name: "FixedLength",
                table: "FileInfo");

            migrationBuilder.DropColumn(
                name: "Length",
                table: "FileInfo");

            migrationBuilder.DropColumn(
                name: "StartRow",
                table: "FileInfo");

            migrationBuilder.RenameColumn(
                name: "FromBatchFiles",
                table: "ObjectFormats",
                newName: "FromBatch");

            migrationBuilder.AddColumn<bool>(
                name: "AutoProcessed",
                table: "ObjectFormats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "FixedLength",
                table: "ObjectFormats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Length",
                table: "ObjectFormats",
                nullable: false,
                defaultValue: 0);
        }
    }
}
