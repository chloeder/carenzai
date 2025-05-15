-- AlterTable
ALTER TABLE "interview_answers" ALTER COLUMN "question" DROP NOT NULL,
ALTER COLUMN "answer" DROP NOT NULL,
ALTER COLUMN "feedback" DROP NOT NULL;
