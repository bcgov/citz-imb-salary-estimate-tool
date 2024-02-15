import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitializeData1707857334245 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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

    await queryRunner.query(
      `INSERT INTO experience (experience_level)
      VALUES
      ('1 - No experience'),
      ('2 - Little experience'),
      ('3 - Some experience'),
      ('4 - Lots of experience')`,
    );

    await queryRunner.query(
      `INSERT INTO mccf_classification (classification, minimum_salary, maximum_salary)
      VALUES
      ('Band 1', 63400, 90399.95),
      ('Band 2', 74300, 105000.04),
      ('Band 3', 86200, 122100.01),
      ('Band 4', 102900, 136700.11),
      ('Band 5', 119600, 152599.97),
      ('Band 6', 137700, 168500.09)`,
    );

    await queryRunner.query(
      `INSERT INTO appointment (type)
      VALUES
      ('TA'),
      ('REG')`,
    );

    await queryRunner.query(
      `INSERT INTO process (type)
      VALUES
      ('Competitive Process'),
      ('Internal Process')`,
    );
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
