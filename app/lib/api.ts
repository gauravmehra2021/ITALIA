const BASE_URL = 'https://api.sseuropa.com'

interface ApiOptions {
  method?: string
  body?: unknown
}

export async function apiRequest<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { method = 'GET', body } = options

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data?.message || 'Something went wrong')
  }

  return data as T
}
