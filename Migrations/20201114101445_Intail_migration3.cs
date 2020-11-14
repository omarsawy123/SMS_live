using Microsoft.EntityFrameworkCore.Migrations;

namespace SMS.Migrations
{
    public partial class Intail_migration3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StudCode",
                table: "Students",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StudCode",
                table: "Students");
        }
    }
}
