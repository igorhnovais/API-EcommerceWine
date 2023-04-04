/*
  Warnings:

  - You are about to drop the column `adm` on the `session` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "session" DROP COLUMN "adm";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "adm" BOOLEAN;
