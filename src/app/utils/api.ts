export const fetchFromApi = async (
  endpoint: string,
  params: Record<string, string> = {}
) => {
  // Construct the base URL for API routes
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Fallback for local development

  const url = new URL(`/api/pokemon`, baseUrl); // Use baseUrl instead of window.location.origin
  url.searchParams.append('endpoint', endpoint);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
  }

  return response.json();
};
