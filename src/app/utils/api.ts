export const fetchFromApi = async (
  endpoint: string,
  params: Record<string, string> = {}
) => {
  const url = new URL(`/api/pokemon`, window.location.origin); // Call Next.js API route
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
