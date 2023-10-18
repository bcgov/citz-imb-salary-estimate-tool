-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ministry" (
    "id" TEXT NOT NULL,
    "ministry_name" TEXT NOT NULL,

    CONSTRAINT "Ministry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalaryRange" (
    "id" SERIAL NOT NULL,
    "minimum_salary" INTEGER NOT NULL,
    "maximum_salary" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SalaryRange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "definition" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Process" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "Process_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "user_first_name" TEXT NOT NULL,
    "user_last_name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inquiry" (
    "id" SERIAL NOT NULL,
    "status_id" INTEGER NOT NULL,
    "inquiry_submission_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inquiry_completion_date" TIMESTAMP(3),
    "candidate_first_name" TEXT NOT NULL,
    "candidate_last_name" TEXT NOT NULL,
    "current_position_number" INTEGER,
    "current_position_title" TEXT,
    "current_ministry_id" TEXT,
    "current_annual_salary" INTEGER,
    "current_mccf_classification_id" INTEGER,
    "experience_level_id" INTEGER NOT NULL,
    "new_position_number" INTEGER NOT NULL,
    "new_position_title" TEXT NOT NULL,
    "new_mccf_classification_id" INTEGER NOT NULL,
    "appointment_type_id" INTEGER NOT NULL,
    "process_type_id" INTEGER NOT NULL,
    "salary_estimate" INTEGER,
    "hm_comment" TEXT,
    "shr_comment" TEXT,
    "adm_comment" TEXT,
    "hm_user_id" TEXT NOT NULL,
    "shr_user_id" TEXT NOT NULL,
    "adm_user_id" TEXT NOT NULL,

    CONSTRAINT "Inquiry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_current_ministry_id_fkey" FOREIGN KEY ("current_ministry_id") REFERENCES "Ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_current_mccf_classification_id_fkey" FOREIGN KEY ("current_mccf_classification_id") REFERENCES "SalaryRange"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_experience_level_id_fkey" FOREIGN KEY ("experience_level_id") REFERENCES "Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_new_mccf_classification_id_fkey" FOREIGN KEY ("new_mccf_classification_id") REFERENCES "SalaryRange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_appointment_type_id_fkey" FOREIGN KEY ("appointment_type_id") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_process_type_id_fkey" FOREIGN KEY ("process_type_id") REFERENCES "Process"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_hm_user_id_fkey" FOREIGN KEY ("hm_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_shr_user_id_fkey" FOREIGN KEY ("shr_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_adm_user_id_fkey" FOREIGN KEY ("adm_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
