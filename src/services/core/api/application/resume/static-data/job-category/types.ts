import { z } from 'zod'

export const jobCategorySchema = z.object(
  {
    id: z.number().optional(),
    label: z.string(),
  },
  { required_error: 'job-category-required' },
)

export type JobCategory = z.infer<typeof jobCategorySchema>
