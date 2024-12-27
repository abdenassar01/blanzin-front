import { z } from 'zod'

export const contractSchema = z.object({
  id: z.number().optional(),
  url: z.string(),
})

export type Contract = z.infer<typeof contractSchema>
