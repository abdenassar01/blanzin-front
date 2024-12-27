import { jobSubCategorySchema } from '../static-data/job-sub-category/types'
import { jobCategorySchema } from '../static-data/job-category/types'
import { z } from 'zod'

export const experienceSchema = z.object({
  id: z.number().optional(),
  jobTitle: z.string({ required_error: 'job-title-required' }),
  employer: z.string({ required_error: 'job-employer-required' }),
  startDate: z.date({ required_error: 'start-date-required' }),
  endDate: z.date({ required_error: 'end-date-required' }),
  description: z.string().array(),
  jobCategory: jobCategorySchema,
  jobSubCategory: jobSubCategorySchema,
})

export type Experience = z.infer<typeof experienceSchema>
