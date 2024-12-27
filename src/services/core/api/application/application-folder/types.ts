import { resumeSchema } from '../resume/types'
import { applicationDocumentSchema } from '../docs/types'
import { contractSchema } from '../contract/types'
import { z } from 'zod'
import { IUser } from '../../auth/types'

export const applicationFolderSchema = z.object({
  id: z.number().optional(),
  resume: resumeSchema,
  docs: z.array(applicationDocumentSchema).default([]),
  paymentPackage: z.any().optional(),
  finished: z.boolean().default(false),
  contract: contractSchema,
  status: z
    .enum(['AWAITING_INTERVIEW', 'AWAITING_DECISION', 'ACCEPTED', 'REJECTED'])
    .default('AWAITING_INTERVIEW'),
})

export type ApplicationFolder = z.infer<typeof applicationFolderSchema> & {
  user: Partial<IUser>
}
