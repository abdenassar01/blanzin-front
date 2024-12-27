import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { Contract } from './types'

const BASE_ENDPOINT = 'application'

export async function fetchAllContracts(page: number = 0) {
  // TODO: to be implemented in backend
  return await apiFetch<APIResponse<Contract>>(
    `${BASE_ENDPOINT}/page/${page}`,
    {},
  )
}

export async function fetchContractByUserId(userId: number) {
  return await apiFetch<APIResponse<Contract>>(
    `${BASE_ENDPOINT}/user/${userId}`,
    {},
  )
}

export async function fetchContractById(id: number) {
  return await apiFetch<APIResponse<Contract>>(`${BASE_ENDPOINT}/${id}`, {})
}

export async function addNewContract(Contract: Contract) {
  return await apiFetch<PagedAPIResponse<Contract>>(`contract/`, {
    method: 'POST',
    data: Contract,
  })
}

export async function updateContract(id: number, Contract: Contract) {
  // TODO: to be implimented
  return await apiFetch<PagedAPIResponse<Contract>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'POST',
    data: Contract,
  })
}

export async function deleteContract(id: number) {
  // TODO: to be implimented

  return await apiFetch<PagedAPIResponse<Contract>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
