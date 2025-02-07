import {z} from "zod"

export const registerSchema = z
  .object({
    email: z.string().email("Email is not correct"),
    firstname: z.string().min(3, "Firstname should be more than 3 characters"),
    lastname: z.string().min(3, "Lastname should be more than 3 characters"),
    password: z.string().min(6, "Password should be more than 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "ConfirmPassword should be more than 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm Password is not the same",
    path: ["confirmPassword"],
  });
