"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "../dbs";

// Get Current User from Clerk to Store in Supabase
export async function getCurrentUser() {
  const loggedInUser = await currentUser();

  if (!loggedInUser) {
    throw new Error("User not found");
  }

  try {
    const user = await db.user.upsert({
      where: {
        clerkUserId: loggedInUser.id,
      },
      update: {},
      create: {
        clerkUserId: loggedInUser.id,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}
