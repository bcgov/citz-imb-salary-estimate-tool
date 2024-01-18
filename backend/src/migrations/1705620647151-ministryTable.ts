import { MigrationInterface, QueryRunner } from 'typeorm';

export class MinistryTable1705620647151 implements MigrationInterface {
  name = 'MinistryTable1705620647151';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ministry" ("id" SERIAL NOT NULL, "createdOn" TIMESTAMP NOT NULL DEFAULT NOW(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT NOW(), "ministry_id" text NOT NULL, "ministry_name" text NOT NULL, CONSTRAINT "PK_9279166bcd571de7497c6c667a4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ministry"`);
  }
}
