/*
  Warnings:

  - You are about to drop the column `cvId` on the `interview_sessions` table. All the data in the column will be lost.
  - You are about to drop the `cvs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `educations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `experiences` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `skills` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `duration` to the `interview_sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resumeId` to the `interview_sessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cvs" DROP CONSTRAINT "cvs_userId_fkey";

-- DropForeignKey
ALTER TABLE "educations" DROP CONSTRAINT "educations_cVId_fkey";

-- DropForeignKey
ALTER TABLE "experiences" DROP CONSTRAINT "experiences_cvId_fkey";

-- DropForeignKey
ALTER TABLE "interview_sessions" DROP CONSTRAINT "interview_sessions_cvId_fkey";

-- DropForeignKey
ALTER TABLE "skills" DROP CONSTRAINT "skills_cvId_fkey";

-- AlterTable
ALTER TABLE "interview_sessions" DROP COLUMN "cvId",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "resumeId" TEXT NOT NULL;

-- DropTable
DROP TABLE "cvs";

-- DropTable
DROP TABLE "educations";

-- DropTable
DROP TABLE "experiences";

-- DropTable
DROP TABLE "skills";

-- DropEnum
DROP TYPE "SkillLevel";

-- CreateTable
CREATE TABLE "resumes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB[],
    "score" DOUBLE PRECISION,
    "scoredAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resumes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interview_sessions" ADD CONSTRAINT "interview_sessions_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "resumes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
