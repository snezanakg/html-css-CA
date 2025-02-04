export const API_BASE = "https://v2.api.noroff.dev/rainy-days";

// Get query parameter from URL
export function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Show or hide loading spinner
export function showLoading(state) {
  document.getElementById("loading").style.display = state ? "block" : "none";
}

