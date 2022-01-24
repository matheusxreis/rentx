import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

// ALTERANDO UMA TABELA EXISTENTE NO BANCO DE DADOS

export class AlterUserDeleteUsername1643066176807
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "username",
        type: "varchar",
      })
    );
  }
}
