import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitializeDb1706133610020 implements MigrationInterface {
  name = 'InitializeDb1706133610020';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "salary_data" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "organization" character varying, "program" character varying, "program_division" character varying, "position_number" character varying, "title" character varying, "job_code" character varying, "classification" character varying, "appointment" character varying, "schedule" character varying, "supervisor_position_number" character varying, "employee_id" character varying, "employee_job_code" character varying, "employee_classification" character varying, "step" integer, "position_job_code_max_annual_rate" integer, "employee_job_code_max_annual_rate" integer, "abbr" character varying, "ama" character varying, CONSTRAINT "PK_e5f8cdc4c78b4f3b800e9392f64" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "ministry" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "ministry_id" text NOT NULL, "ministry_name" text NOT NULL, CONSTRAINT "PK_9279166bcd571de7497c6c667a4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "experience" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "experience_level" text NOT NULL, CONSTRAINT "PK_5e8d5a534100e1b17ee2efa429a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "salary_range" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "band" character varying NOT NULL, "minimum_salary" integer NOT NULL, "maximum_salary" integer NOT NULL, CONSTRAINT "PK_97e25e1874b8181d5b04353aefb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "process" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, CONSTRAINT "PK_d5e3ab0f6df55ee74ca24967952" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "guid" text, "username" text, "email" text, "firstName" text, "lastName" text, "displayName" text, "roles" text array, "lastLogin" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."inquiry_state_enum" AS ENUM('draft', 'for review', 'for approval', 'for offer', 'offered', 'complete', 'cancelled')`,
    );
    await queryRunner.query(
      `CREATE TABLE "inquiry" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "state" "public"."inquiry_state_enum" NOT NULL DEFAULT 'draft', "inquiry_completion_date" TIMESTAMP, "candidate_first_name" character varying NOT NULL, "candidate_last_name" character varying NOT NULL, "current_position_number" character varying, "current_position_title" character varying NOT NULL, "current_ministry_id" uuid NOT NULL, "current_annual_salary" integer NOT NULL, "current_mccf_classification" character varying NOT NULL, "experience_level_id" uuid NOT NULL, "new_position_number" character varying NOT NULL, "new_position_title" character varying NOT NULL, "new_mccf_classification_id" uuid NOT NULL, "appointment_id" uuid NOT NULL, "process_id" uuid NOT NULL, "salary_estimate" integer NOT NULL, "hm_comment" character varying NOT NULL, "shr_comment" character varying NOT NULL, "adm_comment" character varying NOT NULL, "hm_user_id" uuid, "shr_user_id" uuid, "adm_user_id" uuid, CONSTRAINT "PK_3e226d0994e8bd24252dd65e1b6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "appointment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" ADD CONSTRAINT "FK_f512a4c558d28704f1436a5ec04" FOREIGN KEY ("current_ministry_id") REFERENCES "ministry"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" ADD CONSTRAINT "FK_3ac3e15f6d8e1bfb865421474aa" FOREIGN KEY ("experience_level_id") REFERENCES "experience"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" ADD CONSTRAINT "FK_18f47ae74afef3f08900b2c6aed" FOREIGN KEY ("new_mccf_classification_id") REFERENCES "salary_range"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" ADD CONSTRAINT "FK_9a8be2cf3cc3bb9e9997013d173" FOREIGN KEY ("appointment_id") REFERENCES "appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" ADD CONSTRAINT "FK_12327533c1353abe5bbc81b6e8f" FOREIGN KEY ("process_id") REFERENCES "process"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" ADD CONSTRAINT "FK_e5696659d5be7af4fcf7c32dc1c" FOREIGN KEY ("hm_user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" ADD CONSTRAINT "FK_c1896b268eb483150cb149429b3" FOREIGN KEY ("shr_user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" ADD CONSTRAINT "FK_fc70b61915bb6df029f7992fafc" FOREIGN KEY ("adm_user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "inquiry" DROP CONSTRAINT "FK_fc70b61915bb6df029f7992fafc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" DROP CONSTRAINT "FK_c1896b268eb483150cb149429b3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" DROP CONSTRAINT "FK_e5696659d5be7af4fcf7c32dc1c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" DROP CONSTRAINT "FK_12327533c1353abe5bbc81b6e8f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" DROP CONSTRAINT "FK_9a8be2cf3cc3bb9e9997013d173"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" DROP CONSTRAINT "FK_18f47ae74afef3f08900b2c6aed"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" DROP CONSTRAINT "FK_3ac3e15f6d8e1bfb865421474aa"`,
    );
    await queryRunner.query(
      `ALTER TABLE "inquiry" DROP CONSTRAINT "FK_f512a4c558d28704f1436a5ec04"`,
    );
    await queryRunner.query(`DROP TABLE "appointment"`);
    await queryRunner.query(`DROP TABLE "inquiry"`);
    await queryRunner.query(`DROP TYPE "public"."inquiry_state_enum"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "process"`);
    await queryRunner.query(`DROP TABLE "salary_range"`);
    await queryRunner.query(`DROP TABLE "experience"`);
    await queryRunner.query(`DROP TABLE "ministry"`);
    await queryRunner.query(`DROP TABLE "salary_data"`);
  }
}
