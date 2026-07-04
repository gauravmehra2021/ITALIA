import { apiRequest } from './api'

export interface VisitorData {
  timezone: string
  language: string
  page: string
}

export async function trackVisitor(data: VisitorData) {
  return apiRequest('/api/user/visitor', {   // ← replace this endpoint when backend is ready
    method: 'POST', 
    body: {
      timezone: data.timezone,
      language: data.language,
      page:     data.page,
    },
  })
}
