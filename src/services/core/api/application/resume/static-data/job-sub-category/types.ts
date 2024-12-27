import { z } from 'zod'
import { jobCategorySchema } from '../job-category/types'

export const jobSubCategorySchema = z.object(
  {
    id: z.number().optional(),
    label: z.string(),
    jobCategory: jobCategorySchema,
  },
  { required_error: 'job-sub-category-required' },
)

export type JobSubCategory = z.infer<typeof jobSubCategorySchema>
