/*
  Warnings:

  - Added the required column `definition` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `definition` to the `Process` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "definition" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Process" ADD COLUMN     "definition" TEXT NOT NULL;
