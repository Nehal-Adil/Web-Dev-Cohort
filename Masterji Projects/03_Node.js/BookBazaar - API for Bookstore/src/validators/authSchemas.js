import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "name must be at least 3 characters long").max(50),
  email: z.email("invalid email address"),
  password: z.string().min(6, "password must be at least 6 characters long"),
});

export const loginSchema = z.object({
  email: z.email("invalid email address"),
  password: z.string().min(6, "password must be at least 6 characters long"),
});
