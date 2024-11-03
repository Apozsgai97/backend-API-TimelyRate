import { z } from "zod";

export const lessonsSchema = z.object({
  lesson1: z.string().optional(),
  lesson2: z.string().optional(),
  lesson3: z.string().optional(),
  lesson4: z.string().optional(),
});
