import { z } from "zod";

export const formSchema = z.object({
  position: z.string().min(1, "Position is required"),
  duration: z.string().min(1, "Duration is required"),
  resume: z.any().optional(),
  type: z.string().min(1, "Type is required"),
  language: z.string().min(1, "Language is required"),
});
