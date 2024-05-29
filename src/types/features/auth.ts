import { z } from 'zod';

export const validationSchema = z.object({
  role: z.string().optional(),
  avatar: z.string().optional(),
  username: z.string().optional(),
  mail: z.string().email('mail-invalid').optional(),
  phone: z
    .string({
      required_error: 'phone-required',
    })
    .regex(new RegExp(/^\+212\s?\d{9}$/), 'phone-invalid'),
  passwordReset: z.string().optional(),
  password: z
    .string({ required_error: 'password-required' })
    .regex(
      new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      'password-invalid'
    ),
  repassword: z
    .string({ required_error: 'password-confirm-required' })
    .regex(
      new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      'password-invalid'
    ),
});

export const signUpSchema = validationSchema.refine(
  (data) => data.password === data.repassword,
  {
    message: 'password-mismatch',
    path: ['repassword'],
  }
);

export const loginSchema = validationSchema.pick({
  phone: true,
  password: true,
});

const userSchema = validationSchema.pick({
  avatar: true,
  phone: true,
  username: true,
  role: true,
});

export type User = z.infer<typeof userSchema>;
