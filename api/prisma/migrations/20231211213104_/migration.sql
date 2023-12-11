-- DropForeignKey
ALTER TABLE "Inquiry" DROP CONSTRAINT "Inquiry_current_mccf_classification_id_fkey";

-- AlterTable
ALTER TABLE "Inquiry" ALTER COLUMN "current_position_number" SET DATA TYPE TEXT,
ALTER COLUMN "current_mccf_classification_id" SET DATA TYPE TEXT,
ALTER COLUMN "new_position_number" SET DATA TYPE TEXT;
