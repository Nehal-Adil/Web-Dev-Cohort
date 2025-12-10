import { z } from "zod";

export const reviewSchema = z.object({
  rating: z.number().int().min(1, "Rating must be between 1 and 5").max(5),
  comment: z.string().min(1, "Comment cannot be empty").optional(), // optional but if present, non-empty
});
