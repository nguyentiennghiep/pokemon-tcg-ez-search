export interface SetImage {
  symbol: string;
  logo: string;
}

export interface PokemonSet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: SetImage;
}

export interface SetsResponse {
  data: PokemonSet[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface CardsResponse {
  data: Card[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

// Card Type
interface Ability {
  name: string;
  text: string;
  type: string;
}

interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

interface Weakness {
  type: string;
  value: string;
}

interface SetImages {
  symbol: string;
  logo: string;
}

interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: SetImages;
}

interface Legalities {
  unlimited: string;
  standard: string;
  expanded: string;
}

interface CardImages {
  small: string;
  large: string;
}

export interface CardPrice {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices: {
    normal: CardPrice;
    reverseHolofoil: CardPrice;
  };
}

interface CardmarketPrices {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number | null;
  suggestedPrice: number | null;
  reverseHoloSell: number | null;
  reverseHoloLow: number | null;
  reverseHoloTrend: number | null;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number | null;
  reverseHoloAvg7: number | null;
  reverseHoloAvg30: number | null;
}

interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: CardmarketPrices;
}

export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Ability[];
  attacks: Attack[];
  weaknesses: Weakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: CardImages;
  tcgplayer: Tcgplayer;
  cardmarket: Cardmarket;
}
