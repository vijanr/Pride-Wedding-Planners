using Microsoft.EntityFrameworkCore.Migrations;

namespace PrideWeddingPlanners.Migrations
{
    public partial class UpdatedVendorRegistration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanyCatogary",
                table: "VendorTable");

            migrationBuilder.AlterColumn<string>(
                name: "ConfirmPassword",
                table: "VendorTable",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CompanyCategory",
                table: "VendorTable",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ConfirmPassword",
                table: "ClientTable",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanyCategory",
                table: "VendorTable");

            migrationBuilder.AlterColumn<string>(
                name: "ConfirmPassword",
                table: "VendorTable",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<string>(
                name: "CompanyCatogary",
                table: "VendorTable",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ConfirmPassword",
                table: "ClientTable",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
