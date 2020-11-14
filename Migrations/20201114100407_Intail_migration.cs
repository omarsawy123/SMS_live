using Microsoft.EntityFrameworkCore.Migrations;

namespace SMS.Migrations
{
    public partial class Intail_migration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudName = table.Column<string>(nullable: true),
                    FatherName = table.Column<string>(nullable: true),
                    MotherName = table.Column<int>(nullable: false),
                    Class = table.Column<string>(nullable: true),
                    Gender = table.Column<string>(nullable: true),
                    DateOfBirth = table.Column<string>(nullable: true),
                    LocationOfBirth = table.Column<string>(nullable: true),
                    Nationality = table.Column<string>(nullable: true),
                    Religion = table.Column<string>(nullable: true),
                    FatherJob = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    StreetName = table.Column<string>(nullable: true),
                    Area = table.Column<string>(nullable: true),
                    State = table.Column<bool>(nullable: false),
                    FatherMobile = table.Column<string>(nullable: true),
                    MotherMobile = table.Column<string>(nullable: true),
                    Telephone = table.Column<string>(nullable: true),
                    NationalityId = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
