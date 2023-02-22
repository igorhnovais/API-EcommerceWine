/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `session` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "session_user_id_key" ON "session"("user_id");
