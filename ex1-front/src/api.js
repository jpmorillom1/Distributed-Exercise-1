const API_BASE_URL = "http://localhost:8080/api";

async function request(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export function fetchCharacterById(id) {
  return request(`/character/${id}`);
}

export function fetchRequestHistory() {
  return request("/requests");
}
