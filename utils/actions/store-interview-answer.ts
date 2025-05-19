"use server";

import { confUrl } from "@/constants";
import { db } from "../dbs";
import { InterviewAnswerFormData } from "../types/interview";
import { getCurrentUser } from "./get-current-user";

export async function storeInterviewAnswer(data: InterviewAnswerFormData) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const session = await db.interviewSession.findUnique({
      where: {
        id: data.sessionId,
      },
    });

    if (!session) {
      throw new Error("Session not found");
    }

    const resume = await db.resume.findUnique({
      where: {
        id: session.resumeId,
      },
    });

    if (!resume) {
      throw new Error("Resume not found");
    }

    const response = await fetch(`${confUrl.apiUrl}/vapi/generate-question`, {
      method: "POST",
      body: JSON.stringify({
        ...data,
        language: session.language,
        type: session.type,
      }),
    });

    const question = await response.json();

    const result = await db.interviewAnswer.create({
      data: {
        sessionId: data.sessionId,
        question: question.question,
        answer: "",
        feedback: "",
        score: 0,
      },
    });

    return result;
  } catch (error) {
    console.error(error);

    throw new Error("Failed to store interview answer");
  }
}
