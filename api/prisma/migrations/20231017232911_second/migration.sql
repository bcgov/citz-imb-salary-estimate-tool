-- DropForeignKey
ALTER TABLE "Inquiry" DROP CONSTRAINT "Inquiry_adm_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Inquiry" DROP CONSTRAINT "Inquiry_hm_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Inquiry" DROP CONSTRAINT "Inquiry_shr_user_id_fkey";

-- AlterTable
ALTER TABLE "Inquiry" ALTER COLUMN "hm_user_id" DROP NOT NULL,
ALTER COLUMN "shr_user_id" DROP NOT NULL,
ALTER COLUMN "adm_user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_hm_user_id_fkey" FOREIGN KEY ("hm_user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_shr_user_id_fkey" FOREIGN KEY ("shr_user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_adm_user_id_fkey" FOREIGN KEY ("adm_user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
