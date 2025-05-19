"use server";

import { db } from "../dbs";

export async function getResume(userId: string) {
  const resume = await db.resume.findMany({
    where: {
      userId: userId,
    },
  });

  return resume;
}
