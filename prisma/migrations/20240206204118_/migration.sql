/*
  Warnings:

  - You are about to drop the column `content` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "content",
ADD COLUMN     "description" TEXT;
