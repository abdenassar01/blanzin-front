export interface IUser {
  id?: number | string
  firstname: string
  lastname: string
  email: string
  phone: string
  displayName: string
  salt: string
  avatar: string
  passwordReset: number
  roles?: any
  authorities: {
    authority: 'ROLE_TRAINEE' | 'ROLE_EMPLOYEE' | 'ROLE_ADMIN'
  }[]
  username: string
  enabled: boolean
}

export interface ResponseUser {
  token: string
  user: IUser
}
