import { z } from 'zod';

const isPassword = z.string().min(20);
export const UserRequestBodySchema = z.object({
  email: z.string().email(),
  password: isPassword,
});
export const PasswordResetRequestBodySchema = z.object({
  newPassword: isPassword,
});
