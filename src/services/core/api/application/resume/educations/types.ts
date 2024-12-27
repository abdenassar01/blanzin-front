import { z } from 'zod'

export const educationSchema = z.object({
  id: z.number().optional(),
  degree: z.string({ required_error: 'degree-required' }),
  institute: z.string({ required_error: 'institute-required' }),
  specialization: z.string({ required_error: 'specialization-required' }),
  startDate: z.date({ required_error: 'start-date-required' }),
  endDate: z.date({ required_error: 'end-date-required' }),
})

export type Education = z.infer<typeof educationSchema>
