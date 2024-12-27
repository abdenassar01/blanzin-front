import { z } from 'zod'

const roleSchema = z
  .array(z.enum(['ROLE_TRAINEE', 'ROLE_EMPLOYEE', 'ROLE_ADMIN']))
  .default(['ROLE_EMPLOYEE'])

export const validationSchema = z.object({
  roles: roleSchema,
  avatar: z.string().optional(),
  username: z.string().optional(),
  firstname: z.string({ required_error: 'firstname-required' }),
  lastname: z.string({ required_error: 'lastname-required' }),
  email: z.string().email('mail-invalid').optional(),
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
      'password-invalid',
    ),
  repassword: z
    .string({ required_error: 'password-confirm-required' })
    .regex(
      new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      'password-invalid',
    ),
})

export const signUpSchema = validationSchema.refine(
  data => data.password === data.repassword,
  {
    message: 'password-mismatch',
    path: ['repassword'],
  },
)

export const loginSchema = validationSchema.pick({
  phone: true,
  password: true,
})

const userSchema = validationSchema.pick({
  avatar: true,
  phone: true,
  username: true,
  email: true,
  roles: true,
})

export type RoleType = z.infer<typeof roleSchema>

export type CredentialsType = z.infer<typeof loginSchema>
export type UserType = z.infer<typeof userSchema> & { token: string }

export type AuthResponse = { token: string; user: UserType }
