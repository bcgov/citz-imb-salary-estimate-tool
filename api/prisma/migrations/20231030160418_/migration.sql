/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Inquiry" DROP CONSTRAINT "Inquiry_adm_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Inquiry" DROP CONSTRAINT "Inquiry_hm_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Inquiry" DROP CONSTRAINT "Inquiry_shr_user_id_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("guid");

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_hm_user_id_fkey" FOREIGN KEY ("hm_user_id") REFERENCES "User"("guid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_shr_user_id_fkey" FOREIGN KEY ("shr_user_id") REFERENCES "User"("guid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_adm_user_id_fkey" FOREIGN KEY ("adm_user_id") REFERENCES "User"("guid") ON DELETE SET NULL ON UPDATE CASCADE;
