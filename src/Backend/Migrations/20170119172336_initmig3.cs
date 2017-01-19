using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class initmig3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ObjectTargets_ApiInfo_ApiSourceInfoApiInfoId",
                table: "ObjectTargets");

            migrationBuilder.DropForeignKey(
                name: "FK_ObjectTargets_FileInfo_FileSourceInfoId",
                table: "ObjectTargets");

            migrationBuilder.DropIndex(
                name: "IX_ObjectTargets_ApiSourceInfoApiInfoId",
                table: "ObjectTargets");

            migrationBuilder.DropIndex(
                name: "IX_ObjectTargets_FileSourceInfoId",
                table: "ObjectTargets");

            migrationBuilder.DropColumn(
                name: "ApiSourceInfoApiInfoId",
                table: "ObjectTargets");

            migrationBuilder.DropColumn(
                name: "FileSourceInfoId",
                table: "ObjectTargets");

            migrationBuilder.RenameColumn(
                name: "FromBatchRows",
                table: "ObjectFormats",
                newName: "FromBatch");

            migrationBuilder.RenameColumn(
                name: "FromBatchFiles",
                table: "ObjectFormats",
                newName: "AutoProcessed");

            migrationBuilder.AddColumn<int>(
                name: "ObjectTargetId",
                table: "FileInfo",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ObjectTargetId",
                table: "ApiInfo",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_FileInfo_ObjectTargetId",
                table: "FileInfo",
                column: "ObjectTargetId");

            migrationBuilder.CreateIndex(
                name: "IX_ApiInfo_ObjectTargetId",
                table: "ApiInfo",
                column: "ObjectTargetId");

            migrationBuilder.AddForeignKey(
                name: "FK_ApiInfo_ObjectTargets_ObjectTargetId",
                table: "ApiInfo",
                column: "ObjectTargetId",
                principalTable: "ObjectTargets",
                principalColumn: "ObjectTargetId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_FileInfo_ObjectTargets_ObjectTargetId",
                table: "FileInfo",
                column: "ObjectTargetId",
                principalTable: "ObjectTargets",
                principalColumn: "ObjectTargetId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApiInfo_ObjectTargets_ObjectTargetId",
                table: "ApiInfo");

            migrationBuilder.DropForeignKey(
                name: "FK_FileInfo_ObjectTargets_ObjectTargetId",
                table: "FileInfo");

            migrationBuilder.DropIndex(
                name: "IX_FileInfo_ObjectTargetId",
                table: "FileInfo");

            migrationBuilder.DropIndex(
                name: "IX_ApiInfo_ObjectTargetId",
                table: "ApiInfo");

            migrationBuilder.DropColumn(
                name: "ObjectTargetId",
                table: "FileInfo");

            migrationBuilder.DropColumn(
                name: "ObjectTargetId",
                table: "ApiInfo");

            migrationBuilder.RenameColumn(
                name: "FromBatch",
                table: "ObjectFormats",
                newName: "FromBatchRows");

            migrationBuilder.RenameColumn(
                name: "AutoProcessed",
                table: "ObjectFormats",
                newName: "FromBatchFiles");

            migrationBuilder.AddColumn<int>(
                name: "ApiSourceInfoApiInfoId",
                table: "ObjectTargets",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FileSourceInfoId",
                table: "ObjectTargets",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ObjectTargets_ApiSourceInfoApiInfoId",
                table: "ObjectTargets",
                column: "ApiSourceInfoApiInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_ObjectTargets_FileSourceInfoId",
                table: "ObjectTargets",
                column: "FileSourceInfoId");

            migrationBuilder.AddForeignKey(
                name: "FK_ObjectTargets_ApiInfo_ApiSourceInfoApiInfoId",
                table: "ObjectTargets",
                column: "ApiSourceInfoApiInfoId",
                principalTable: "ApiInfo",
                principalColumn: "ApiInfoId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ObjectTargets_FileInfo_FileSourceInfoId",
                table: "ObjectTargets",
                column: "FileSourceInfoId",
                principalTable: "FileInfo",
                principalColumn: "FileSourceInfoId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
