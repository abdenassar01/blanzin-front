import { create } from 'zustand'
import {
  ROLE,
  ROOT_ROLE,
  RoleType,
  RootApplicationRole,
} from '../../../constants/role'

type State = {
  currentProfile: RoleType
  roles: RoleType[]
  rootProfileType: RootApplicationRole
}

type Action = {
  setCurrentProfile: (value: RoleType) => void
  setRootProfileType: (value: RootApplicationRole) => void
  toggleRole: (value: RoleType) => void
}

export type ProfileTypeStore = State & Action

export const useProfileTypeStore = create<ProfileTypeStore>(set => ({
  currentProfile: 'ROLE_TRAINEE',
  roles: [],
  rootProfileType: ROOT_ROLE.SERVICE_PLACEMENT,
  setRootProfileType: value => {
    set(state => {
      state.rootProfileType = value
      return { rootProfileType: value }
    })
  },
  setCurrentProfile: value => {
    set(state => {
      state.currentProfile = value
      return { currentProfile: value }
    })
  },
  toggleRole: value => {
    set(state => {
      if (state.roles.filter(role => role === value).length === 0) {
        const arr = [...state.roles, value]
        state.roles = arr
        return { roles: arr }
      }
      const tmp = state.roles.filter(role => role !== value)
      state.roles = tmp
      return { roles: tmp }
    })
  },
}))
