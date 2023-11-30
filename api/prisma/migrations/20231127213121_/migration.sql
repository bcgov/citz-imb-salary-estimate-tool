/*
  Warnings:

  - You are about to drop the column `Title` on the `salaryData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "salaryData" DROP COLUMN "Title",
ADD COLUMN     "title" TEXT;
