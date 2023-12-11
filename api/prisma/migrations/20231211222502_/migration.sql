/*
  Warnings:

  - Added the required column `definition` to the `SalaryRange` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SalaryRange" ADD COLUMN     "definition" TEXT NOT NULL;
