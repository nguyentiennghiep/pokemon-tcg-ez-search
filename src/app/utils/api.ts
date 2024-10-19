const API_BASE_URL = 'https://api.pokemontcg.io/v2';
const API_KEY = process.env.NEXT_PUBLIC_POKEMON_API_KEY; // Replace with your actual API key

export const fetchFromApi = async (
  endpoint: string,
  params: Record<string, string> = {} 
) => {
  const url = new URL(`${API_BASE_URL}/${endpoint}`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const response = await fetch(url.toString(), {
    headers: {
      'X-Api-Key': API_KEY || '',
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
  }

  return response.json();
};
