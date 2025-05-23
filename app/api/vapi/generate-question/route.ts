import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";
import { InterviewType } from "@prisma/client";
export async function POST(request: NextRequest) {
  const { positionApplied, experience, education, skills, type, language } =
    await request.json();

  try {
    const { text: question } = await generateText({
      model: google("gemini-2.0-flash"),
      prompt: `
      You are a senior recruiter at a top global company. You've received a job application with the following information:

      Position Applied: ${positionApplied}
      Experience: ${experience}
      Education: ${education}
      Skills: ${skills}
      Type Interview: ${type}

      Based on this, your task is to:

      Analyze if this candidate is a career switcher (by checking if their experience and education are not directly related to the applied position).

      ${
        type === InterviewType.TECHNICAL
          ? `Generate 5-10 thoughtful and realistic interview questions that you, as an experienced recruiter, would ask the candidate in a first-round interview. The questions should reflect your understanding of their background and the role they are applying for. The questions should be focused on the candidate's technical skills, such as programming languages, frameworks, and tools.`
          : `Generate 5-10 thoughtful and realistic interview questions that you, as an experienced recruiter, would ask the candidate in a first-round interview. The questions should reflect your understanding of their background and the role they are applying for. The questions should be focused on the candidate's soft skills, such as communication, teamwork, leadership, and problem-solving.`
      }

      The questions should be in ${language} language.

      Assume you are speaking naturally in a conversational tone (avoid robotic or overly formal wording).

      Do not explicitly ask if they are a career switcher — use your judgment and ask questions accordingly.

      Keep each question concise and suitable to be read aloud in a voice interview format (max 20 seconds per question).

      Output your questions as a single string in plain text. Start each question with a dash (-) and keep the format consistent. Don't include any explanations, don't include any other text, don't say hello or anything else even in the beginning and another language, no introduction, just generate the questions.

      Example output format:

      Tell me about a project where you had to learn something new quickly.

      In your previous experience, how did you handle situations where you had to lead without formal authority?
      ...
      `,
    });

    return NextResponse.json({
      question,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate questions",
      },
      {
        status: 500,
      }
    );
  }
}
