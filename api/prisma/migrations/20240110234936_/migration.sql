/*
  Warnings:

  - The `current_ministry_id` column on the `Inquiry` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Ministry` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Ministry` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `ministry_id` to the `Ministry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Inquiry" DROP CONSTRAINT "Inquiry_current_ministry_id_fkey";

-- AlterTable
ALTER TABLE "Inquiry" DROP COLUMN "current_ministry_id",
ADD COLUMN     "current_ministry_id" INTEGER;

-- AlterTable
ALTER TABLE "Ministry" DROP CONSTRAINT "Ministry_pkey",
ADD COLUMN     "ministry_id" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Ministry_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_current_ministry_id_fkey" FOREIGN KEY ("current_ministry_id") REFERENCES "Ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
