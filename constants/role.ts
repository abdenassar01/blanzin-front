export const ROLE = {
  TRAINEE: 'TRAINEE',
  EMPLOYEE: 'EMPLOYEE',
  BOTH: 'BOTH',
  ADMIN: 'ADMIN',
} as const

export type RoleType = 'ROLE_TRAINEE' | 'ROLE_EMPLOYEE' | 'ROLE_ADMIN'

export const ROOT_ROLE = {
  SERVICE_PLACEMENT: 'SERVICE_PLACEMENT',
  JOBS_IN_GERMANY: 'JOBS_IN_GERMANY',
} as const

export type RootApplicationRole = 'SERVICE_PLACEMENT' | 'JOBS_IN_GERMANY'
