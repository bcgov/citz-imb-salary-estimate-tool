/*
  Warnings:

  - You are about to drop the `PastSalaries` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PastSalaries";

-- CreateTable
CREATE TABLE "salaryData" (
    "id" SERIAL NOT NULL,
    "organization" TEXT,
    "program" TEXT,
    "program_division" TEXT,
    "position_number" INTEGER,
    "Title" TEXT,
    "job_code" INTEGER,
    "classification" TEXT,
    "appointment" TEXT,
    "schedule" TEXT,
    "supervisor_position_number" INTEGER,
    "employee_id" INTEGER,
    "employee_job_code" INTEGER,
    "employee_classification" TEXT,
    "step" INTEGER,
    "position_job_code_max_annual_rate" INTEGER,
    "employee_job_code_max_annual_rate" INTEGER,
    "abbr" INTEGER,
    "ama" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "salaryData_pkey" PRIMARY KEY ("id")
);
