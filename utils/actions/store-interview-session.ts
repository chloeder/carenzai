"use server";

import { db } from "../dbs";
import { InterviewSessionFormData } from "../types/interview";
import { getCurrentUser } from "./get-current-user";
import { storeInterviewAnswer } from "./store-interview-answer";
import { storeResume } from "./store-resume";

export async function storeInterviewSession(data: InterviewSessionFormData) {
  // Get the current user
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("User not found");
  }

  try {
    // Store Resume Logic
    const resume = await storeResume(data.resume);

    if (!resume) {
      throw new Error("Failed to store resume");
    }

    // Store Interview Session Logic
    const interviewSession = await db.interviewSession.create({
      data: {
        userId: user.id,
        resumeId: resume.id,
        positionApplied: data.position,
        duration: parseInt(data.duration),
      },
    });

    // Store Interview Answer Logic
    await storeInterviewAnswer({
      sessionId: interviewSession.id,
      question: "",
      answer: "",
      feedback: "",
      score: 0,
    });

    return interviewSession;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to store interview session");
  }
}
