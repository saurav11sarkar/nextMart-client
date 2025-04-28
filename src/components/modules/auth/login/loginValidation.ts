import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is requried" })
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is requried" })
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must be at most 40 characters"),
});

