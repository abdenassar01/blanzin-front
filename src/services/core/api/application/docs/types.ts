import { z } from 'zod'

export type DocType =
  | 'LANGUAGE_CERTIFICATE'
  | 'JOB_CERTIFICATE'
  | 'DIPLOMA_CERTIFICATE'
  | 'INTERNSHIP_CERTIFICATE'
  | 'ACKNOWLEDGEMENT_CERTIFICATE'

export const applicationDocumentSchema = z.object({
  id: z.number().optional(),
  url: z.string(),
  uploadedAt: z.date().optional(),
  type: z
    .enum([
      'LANGUAGE_CERTIFICATE',
      'JOB_CERTIFICATE',
      'DIPLOMA_CERTIFICATE',
      'INTERNSHIP_CERTIFICATE',
      'ACKNOWLEDGEMENT_CERTIFICATE',
    ])
    .default('LANGUAGE_CERTIFICATE'),
})

export type ApplicationDocument = z.infer<typeof applicationDocumentSchema>
