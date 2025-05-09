import {
  buisnessAccountSchema,
  personalAccountSchema,
} from '@/schemas/userSchema';
import { Timestamp } from 'firebase/firestore';
import { z } from 'zod';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type BuisnessUserFormType = z.infer<typeof buisnessAccountSchema>;
export type PersonalUserFormType = z.infer<typeof personalAccountSchema>;
export type PersonalAccountType = Omit<PersonalUserFormType, 'dateOfBirth'> & {
  dateOfBirth: Timestamp;
};
export type BuisnessAccountType = BuisnessUserFormType;
