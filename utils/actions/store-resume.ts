"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "../dbs";
import { ResumeData } from "../types/resume";

export async function storeResume(data: ResumeData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", JSON.stringify(data.content));

    const response = await fetch("/api/vapi/generate", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    // Store the resume in the database
    const resume = await db.resume.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: user.id,
      },
    });

    return resume;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to store resume");
  }
}
