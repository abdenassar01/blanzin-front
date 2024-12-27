'use server'

import { signIn as naSingIn, signOut as naSignOut } from '.'

export async function signIn(phone: string, password: string) {
  return await naSingIn('credentials', {
    phone: phone,
    password: password,
    redirect: false,
  })
}

export async function signOut() {
  return await naSignOut()
}
