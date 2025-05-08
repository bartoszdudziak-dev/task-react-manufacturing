import { z } from 'zod';

export const buisnessUserSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Enter a valid email address.')
    .min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  name: z.string().email().min(1, 'Name is required'),
  city: z.string().email().min(1, 'City is required'),
});
