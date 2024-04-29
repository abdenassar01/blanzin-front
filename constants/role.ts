export const ROLE = {
  PROVIDER: "PROVIDER",
  CUSTOMER: "CUSTOMER",
  TRAINEE: "TRAINEE",
  SKILLED_WORKER: "SKILLED_WORKER",
  ADMIN: "ADMIN",
} as const;

export type RoleType =
  | "PROVIDER"
  | "CUSTOMER"
  | "ADMIN"
  | "SKILLED_WORKER"
  | "TRAINEE";

export const ROOT_ROLE = {
  SERVICE_PLACEMENT: "SERVICE_PLACEMENT",
  JOBS_IN_GERMANY: "JOBS_IN_GERMANY",
} as const;

export type RootApplicationRole = "SERVICE_PLACEMENT" | "JOBS_IN_GERMANY";
