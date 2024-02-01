const API_URL = `https://65b98494b71048505a8aea91.mockapi.io/api/v1`

export const get = async (endpoint: string, options?: { headers?: any, revalidate?: number }) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    next: {
      revalidate: options?.revalidate
    }
  })
  return response.json()
}
