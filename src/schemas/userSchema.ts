import { z } from 'zod';

const commonAccountSchema = {
  email: z
    .string()
    .trim()
    .email('Enter a valid email address')
    .min(1, 'Email is required'),
  password: z
    .string()
    .trim()
    .min(6, 'Password must be at least 6 characters long'),
  city: z
    .string()
    .trim()
    .min(1, 'City is required')
    .min(3, 'City must be at least 3 characters long'),
};

export const buisnessAccountSchema = z.object({
  ...commonAccountSchema,
  name: z.string().trim().min(1, 'Name is required'),
});

export const personalAccountSchema = z.object({
  ...commonAccountSchema,
  firstName: z.string().trim().min(1, 'Last name is required'),
  lastName: z.string().trim().min(1, 'First name is required'),
  dateOfBirth: z.string().date().min(1, 'Date is required'),
});
