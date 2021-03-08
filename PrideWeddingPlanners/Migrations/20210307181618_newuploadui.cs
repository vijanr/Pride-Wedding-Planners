using Microsoft.EntityFrameworkCore.Migrations;

namespace PrideWeddingPlanners.Migrations
{
    public partial class newuploadui : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Uploads",
                table: "Uploads");

            migrationBuilder.DropColumn(
                name: "EmployeeId",
                table: "Uploads");

            migrationBuilder.RenameColumn(
                name: "Occupation",
                table: "Uploads",
                newName: "Min_package");

            migrationBuilder.RenameColumn(
                name: "EmployeeName",
                table: "Uploads",
                newName: "Mid_package");

            migrationBuilder.AddColumn<int>(
                name: "CompanyId",
                table: "Uploads",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<string>(
                name: "CompanyName",
                table: "Uploads",
                type: "nvarchar(50)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Located_distric",
                table: "Uploads",
                type: "nvarchar(50)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Located_province",
                table: "Uploads",
                type: "nvarchar(50)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Max_package",
                table: "Uploads",
                type: "nvarchar(50)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Uploads",
                table: "Uploads",
                column: "CompanyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Uploads",
                table: "Uploads");

            migrationBuilder.DropColumn(
                name: "CompanyId",
                table: "Uploads");

            migrationBuilder.DropColumn(
                name: "CompanyName",
                table: "Uploads");

            migrationBuilder.DropColumn(
                name: "Located_distric",
                table: "Uploads");

            migrationBuilder.DropColumn(
                name: "Located_province",
                table: "Uploads");

            migrationBuilder.DropColumn(
                name: "Max_package",
                table: "Uploads");

            migrationBuilder.RenameColumn(
                name: "Min_package",
                table: "Uploads",
                newName: "Occupation");

            migrationBuilder.RenameColumn(
                name: "Mid_package",
                table: "Uploads",
                newName: "EmployeeName");

            migrationBuilder.AddColumn<int>(
                name: "EmployeeId",
                table: "Uploads",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Uploads",
                table: "Uploads",
                column: "EmployeeId");
        }
    }
}
