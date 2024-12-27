'use client'

import { useEffect, useState } from 'react'

export function useFetch<T>(callback: () => Promise<T>, dependencies?: any[]) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    callback()
      .then(res => {
        setData(res)
      })
      .catch(e => setError(e))
      .finally(() => {
        setLoading(false)
      })
  }, [dependencies])

  return { data, loading, error }
}
