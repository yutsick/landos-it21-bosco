const API_URL = import.meta.env.VITE_API_URL || import.meta.env.API_URL;

async function getJson(path) {
  const res = await fetch(`${API_URL}${path}`);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return res.json();
}

export function getSetting() {
  return getJson("/api/settings");
}

export function getPages(path) {
  return getJson(`/api/pages?path=${encodeURIComponent(path)}`);
}
