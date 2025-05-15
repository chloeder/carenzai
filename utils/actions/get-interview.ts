"use server";

import { db } from "../dbs";

// Newest User Interview Session
export async function getNewestInterviewSession(userId: string) {
  const interview = await db.interviewSession.findMany({
    where: {
      userId: userId,
    },
    include: {
      answers: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return interview;
}
