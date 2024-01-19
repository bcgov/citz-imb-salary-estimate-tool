import { MigrationInterface, QueryRunner } from 'typeorm';

export class MinistryTable1705620647151 implements MigrationInterface {
  name = 'MinistryTable1705620647151';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ministry" ("id" SERIAL NOT NULL, "createdOn" TIMESTAMP NOT NULL DEFAULT NOW(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT NOW(), "ministry_id" text NOT NULL, "ministry_name" text NOT NULL, CONSTRAINT "PK_9279166bcd571de7497c6c667a4" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `INSERT INTO ministry (ministry_id, ministry_name)
      VALUES
      ('PREM', 'Office of the Premier'),
      ('AEST', 'Advanced Education and Skills Training'),
      ('AFF', 'Agriculture, Food and Fisheries'),
      ('AG', 'Attorney General and Minister responsible for Housing'),
      ('PSA', 'BC Public Service Agency'),
      ('CFD', 'Children and Family Development'),
      ('CITZ', 'Citizens'' Services'),
      ('EDUC', 'Education'),
      ('EMBC', 'Emergency Management BC'),
      ('EMLI', 'Energy, Mines, and Low-Carbon Innovation'),
      ('ENV', 'Environment & Climate Change Strategy'),
      ('FIN', 'Finance'),
      ('FLNR', 'Forests, Lands, Natural Resource Operations, and Rural Development'),
      ('GCPE', 'Government Communications and Public Engagement'),
      ('HLTH', 'Health'),
      ('IRR', 'Indigenous Relations and Reconciliation'),
      ('JERI', 'Jobs, Economic Recovery and Innovation'),
      ('LBR', 'Labour'),
      ('MMHA', 'Mental Health and Addictions'),
      ('MUNI', 'Municipal Affairs'),
      ('PSSG', 'Public Safety and Solicitor General'),
      ('PSEC', 'Public Sector Employers'' Council Secretariat'),
      ('SDPR', 'Social Development and Poverty Reduction'),
      ('TACS', 'Tourism, Arts, Culture and Sport'),
      ('TRAN', 'Transportation and Infrastructure')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ministry"`);
  }
}
