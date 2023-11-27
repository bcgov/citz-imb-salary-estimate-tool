-- AlterTable
ALTER TABLE "Inquiry" ADD COLUMN     "employee_id" INTEGER;

-- CreateTable
CREATE TABLE "PastSalaries" (
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

    CONSTRAINT "PastSalaries_pkey" PRIMARY KEY ("id")
);
