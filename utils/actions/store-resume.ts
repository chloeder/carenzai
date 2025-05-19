"use server";

import { getCurrentUser } from "./get-current-user";
import { db } from "../dbs";
import { confUrl } from "@/constants";

export async function storeResume(data: File) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const formData = new FormData();

    formData.append("resume", data);

    const response = await fetch(`${confUrl.apiUrl}/gemini/summary-resume`, {
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
