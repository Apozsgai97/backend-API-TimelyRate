import {z} from "zod"

export const ratingSchema = z.object({
  lesson1: z.number().positive().max(5),
  lesson2: z.number().positive().max(5),
  lesson3: z.number().positive().max(5),
  lesson4: z.number().positive().max(5),
});
