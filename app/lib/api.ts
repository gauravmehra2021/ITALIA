const BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5057').replace(/\/+$/, '')

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

  let data: { message?: string; errors?: Record<string, string[]> } | null = null
  try {
    data = await res.json()
  } catch {
    data = null
  }

  if (!res.ok) {
    const firstFieldError = data?.errors
      ? Object.values(data.errors).flat().find((msg): msg is string => typeof msg === 'string')
      : undefined
    throw new Error(firstFieldError || data?.message || `Request failed (${res.status})`)
  }

  return data as T
}
