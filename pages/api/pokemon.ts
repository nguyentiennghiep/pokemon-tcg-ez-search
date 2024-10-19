// pages/api/pokemon.ts
import { NextApiRequest, NextApiResponse } from 'next';

const API_BASE_URL = 'https://api.pokemontcg.io/v2';
const API_KEY = process.env.POKEMON_API_KEY; // Access environment variable from .env.local

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { endpoint, ...queryParams } = req.query;

    if (!endpoint) {
        return res.status(400).json({ error: 'Endpoint is required' });
    }

    const url = new URL(`${API_BASE_URL}/${endpoint}`);
    Object.keys(queryParams).forEach((key) => url.searchParams.append(key, queryParams[key] as string));

    try {
        const response = await fetch(url.toString(), {
            headers: {
                'X-Api-Key': API_KEY || '', // Use the API key securely from server-side
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: response.statusText });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + (error as Error).message });
    }
}
