import { MigrationInterface, QueryRunner } from 'typeorm';

export class ExperienceTable1705691898760 implements MigrationInterface {
  name = 'ExperienceTable1705691898760';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "experience" ("id" SERIAL NOT NULL, "createdOn" TIMESTAMP NOT NULL DEFAULT NOW(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT NOW(), "experience_level" text NOT NULL, CONSTRAINT "PK_5e8d5a534100e1b17ee2efa429a" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `INSERT INTO experience (experience_level)
      VALUES
      ('1 - Minimal Experience'),
      ('2 - Limited Experience'),
      ('3 - Multiple Years of Experience'),
      ('4 - Senior Level Experience')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "experience"`);
  }
}
