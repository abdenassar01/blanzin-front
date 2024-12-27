import { IUser, ResponseUser } from '@/services/core/api/auth/types'

export function createUser(auth: ResponseUser) {
  return {
    phone: auth.user.phone,
    avatar: auth.user.avatar,
    username: auth.user.username,
    email: auth.user.email,
    token: auth.token,
    roles: auth.user.authorities.map(role => role.authority),
  }
}
