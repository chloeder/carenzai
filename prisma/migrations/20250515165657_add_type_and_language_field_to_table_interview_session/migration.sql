/*
  Warnings:

  - Added the required column `language` to the `interview_sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `interview_sessions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "InterviewType" AS ENUM ('TECHNICAL', 'BEHAVIORAL');

-- AlterTable
ALTER TABLE "interview_sessions" ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "type" "InterviewType" NOT NULL;
