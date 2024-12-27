import { z } from 'zod'

export const checkRequirementSchema = z.object({
  type: z.enum(['TRAINEE', 'EMPLOYEE']).default('TRAINEE'),
  workerDiploma: z.string({ required_error: 'Please choose a value' }),
  workerUniversity: z.string({ required_error: 'Please choose a value' }),
  workerBac: z.string({ required_error: 'Please choose a value' }),
  workerLang: z.string({ required_error: 'Please choose a value' }),
  traineeDiploma: z.string({ required_error: 'Please choose a value' }),
  TraineeUniversity: z.string({ required_error: 'Please choose a value' }),
  traineeLang: z.string({ required_error: 'Please choose a value' }),
})

export type CheckRequirementType = z.infer<typeof checkRequirementSchema>
