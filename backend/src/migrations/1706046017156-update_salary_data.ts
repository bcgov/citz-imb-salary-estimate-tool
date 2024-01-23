import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateSalaryData1706046017156 implements MigrationInterface {
    name = 'UpdateSalaryData1706046017156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "organization" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "program" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "program_division" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "position_number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "title" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "job_code" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "classification" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "appointment" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "schedule" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "supervisor_position_number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "employee_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "employee_job_code" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "employee_classification" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "step" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "position_job_code_max_annual_rate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "employee_job_code_max_annual_rate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "abbr" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "ama" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "ama" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "abbr" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "employee_job_code_max_annual_rate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "position_job_code_max_annual_rate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "step" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "employee_classification" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "employee_job_code" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "employee_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "supervisor_position_number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "schedule" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "appointment" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "classification" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "job_code" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "title" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "position_number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "program_division" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "program" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salary_data" ALTER COLUMN "organization" SET NOT NULL`);
    }

}
