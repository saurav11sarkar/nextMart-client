import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({ required_error: "Name is requried" })
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be at most 20 characters"),
  email: z
    .string({ required_error: "Email is requried" })
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is requried" })
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must be at most 40 characters"),
  confirmPassword: z
    .string({ required_error: "Confirm Password is requried" })
    .min(1, "Password must be at least 6 characters"),
});
