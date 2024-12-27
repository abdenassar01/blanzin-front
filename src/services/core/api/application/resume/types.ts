import { UserType } from '@/types'
import { experienceSchema } from './experiences/types'
import { educationSchema } from './educations/types'
import { z } from 'zod'
import { IUser } from '../../auth/types'

export const resumeSchema = z.object({
  id: z.number().optional(),
  firstname: z.string({ required_error: 'resume-firstname-required' }),
  lastname: z.string({ required_error: 'resume-lastname-required' }),
  avatar: z.string({ required_error: 'resume-avatar-required' }),
  email: z
    .string({ required_error: 'resume-email-required' })
    .email('resume-email-invalid'),
  phone: z.string({ required_error: 'resume-phone-required' }),
  placeOfBirth: z.string({ required_error: 'resume-birth-place-required' }),
  dateOfBirth: z.date({ required_error: 'resume-birth-date-required' }),
  gender: z.enum(['Male', 'Female']).default('Male'),
  yearsOfExperience: z.number().optional(),
  personalSkills: z.array(z.string()),
  experiences: z.array(experienceSchema),
  educations: z.array(educationSchema),
  languagesWithGrades: z.array(z.string()),
})

export type Resume = z.infer<typeof resumeSchema> & { user: Partial<IUser> }
