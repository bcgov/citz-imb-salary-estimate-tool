import { MigrationInterface, QueryRunner } from "typeorm";

export class InitializeDb1706028184910 implements MigrationInterface {
    name = 'InitializeDb1706028184910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ministry" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "ministry_id" text NOT NULL, "ministry_name" text NOT NULL, CONSTRAINT "PK_9279166bcd571de7497c6c667a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "experience" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "experience_level" text NOT NULL, CONSTRAINT "PK_5e8d5a534100e1b17ee2efa429a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salary_range" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "band" character varying NOT NULL, "minimum_salary" integer NOT NULL, "maximum_salary" integer NOT NULL, CONSTRAINT "PK_97e25e1874b8181d5b04353aefb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "process" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, CONSTRAINT "PK_d5e3ab0f6df55ee74ca24967952" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "guid" text, "username" text, "email" text, "firstName" text, "lastName" text, "displayName" text, "roles" text array, "lastLogin" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."inquiry_state_enum" AS ENUM('draft', 'for review', 'for approval', 'for offer', 'offered', 'complete', 'cancelled')`);
        await queryRunner.query(`CREATE TABLE "inquiry" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "employee_id" character varying NOT NULL, "state" "public"."inquiry_state_enum" NOT NULL DEFAULT 'draft', "inquiry_completion_date" TIMESTAMP NOT NULL, "candidate_first_name" character varying NOT NULL, "candidate_last_name" character varying NOT NULL, "current_position_number" character varying, "current_position_title" character varying NOT NULL, "current_annual_salary" integer NOT NULL, "current_mccf_classification_id" character varying NOT NULL, "new_position_number" character varying NOT NULL, "new_position_title" character varying NOT NULL, "salary_estimate" integer NOT NULL, "hm_comment" character varying NOT NULL, "shr_comment" character varying NOT NULL, "adm_comment" character varying NOT NULL, "currentMinistryId" uuid, "experienceLevelId" uuid, "newMccfClassificationId" uuid, "appointmentId" uuid, "processId" uuid, "hmUserId" uuid, "shrUserId" uuid, "admUserId" uuid, CONSTRAINT "PK_3e226d0994e8bd24252dd65e1b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appointment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salary_data" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "organization" character varying NOT NULL, "program" character varying NOT NULL, "program_division" character varying NOT NULL, "position_number" character varying NOT NULL, "title" character varying NOT NULL, "job_code" character varying NOT NULL, "classification" character varying NOT NULL, "appointment" character varying NOT NULL, "schedule" character varying NOT NULL, "supervisor_position_number" character varying NOT NULL, "employee_id" character varying NOT NULL, "employee_job_code" character varying NOT NULL, "employee_classification" character varying NOT NULL, "step" integer NOT NULL, "position_job_code_max_annual_rate" integer NOT NULL, "employee_job_code_max_annual_rate" integer NOT NULL, "abbr" character varying NOT NULL, "ama" character varying NOT NULL, CONSTRAINT "PK_e5f8cdc4c78b4f3b800e9392f64" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "inquiry" ADD CONSTRAINT "FK_2a68bcfcc54acc6e2e7c75eeb88" FOREIGN KEY ("currentMinistryId") REFERENCES "ministry"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inquiry" ADD CONSTRAINT "FK_48ad6f832458caa5fa36927ddf7" FOREIGN KEY ("experienceLevelId") REFERENCES "experience"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inquiry" ADD CONSTRAINT "FK_a896b6dd4ac343747d5e6453bca" FOREIGN KEY ("newMccfClassificationId") REFERENCES "salary_range"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inquiry" ADD CONSTRAINT "FK_78ffdc92444007b67e65fa6a928" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inquiry" ADD CONSTRAINT "FK_d86e9f0f3eb13cc21ca2908835f" FOREIGN KEY ("processId") REFERENCES "process"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inquiry" ADD CONSTRAINT "FK_0a6ce7158d8285c1901451f4673" FOREIGN KEY ("hmUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inquiry" ADD CONSTRAINT "FK_a25365413b9299bc86f41987a14" FOREIGN KEY ("shrUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inquiry" ADD CONSTRAINT "FK_b3111cca940fdd8083fa6f38183" FOREIGN KEY ("admUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inquiry" DROP CONSTRAINT "FK_b3111cca940fdd8083fa6f38183"`);
        await queryRunner.query(`ALTER TABLE "inquiry" DROP CONSTRAINT "FK_a25365413b9299bc86f41987a14"`);
        await queryRunner.query(`ALTER TABLE "inquiry" DROP CONSTRAINT "FK_0a6ce7158d8285c1901451f4673"`);
        await queryRunner.query(`ALTER TABLE "inquiry" DROP CONSTRAINT "FK_d86e9f0f3eb13cc21ca2908835f"`);
        await queryRunner.query(`ALTER TABLE "inquiry" DROP CONSTRAINT "FK_78ffdc92444007b67e65fa6a928"`);
        await queryRunner.query(`ALTER TABLE "inquiry" DROP CONSTRAINT "FK_a896b6dd4ac343747d5e6453bca"`);
        await queryRunner.query(`ALTER TABLE "inquiry" DROP CONSTRAINT "FK_48ad6f832458caa5fa36927ddf7"`);
        await queryRunner.query(`ALTER TABLE "inquiry" DROP CONSTRAINT "FK_2a68bcfcc54acc6e2e7c75eeb88"`);
        await queryRunner.query(`DROP TABLE "salary_data"`);
        await queryRunner.query(`DROP TABLE "appointment"`);
        await queryRunner.query(`DROP TABLE "inquiry"`);
        await queryRunner.query(`DROP TYPE "public"."inquiry_state_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "process"`);
        await queryRunner.query(`DROP TABLE "salary_range"`);
        await queryRunner.query(`DROP TABLE "experience"`);
        await queryRunner.query(`DROP TABLE "ministry"`);
    }

}
