import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1705443605154 implements MigrationInterface {
  name = 'UserTable1705443605154';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "base_entity" ("id" SERIAL NOT NULL, "createdOn" TIMESTAMP NOT NULL DEFAULT NOW(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT NOW(), CONSTRAINT "PK_03e6c58047b7a4b3f6de0bfa8d7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdOn" TIMESTAMP NOT NULL DEFAULT NOW(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT NOW(), "guid" text, "username" text, "email" text, "firstName" text, "lastName" text, "displayName" text, "roles" text array, "lastLogin" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "base_entity"`);
  }
}
