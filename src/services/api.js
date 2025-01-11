import axios from 'axios';

// Using alternative base URL with API key if available
const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

// Create axios instance with default config
const api = axios.create({
  baseURL: COINGECKO_API,
  headers: API_KEY ? {
    'x-cg-demo-api-key': API_KEY
  } : {}
});

// Fallback data for development/error cases
const FALLBACK_DATA = {
  bitcoin: {
    usd: 46953.04,
    inr: 3942343,
    usd_24h_change: 2.51,
    name: "Bitcoin",
    symbol: "BTC",
    market_cap_rank: 1
  }
};

export const getCoinPrice = async (id) => {
  try {
    const response = await api.get('/simple/price', {
      params: {
        ids: id,
        vs_currencies: 'usd,inr',
        include_24hr_change: true,
        include_market_cap: true,
      }
    });
    return response.data;
  } catch (error) {
    console.warn('Using fallback data due to API error:', error);
    return { [id]: FALLBACK_DATA[id] };
  }
};

export const getTrendingCoins = async () => {
  try {
    const response = await api.get('/search/trending');
    // Return only first 3 trending coins with fallback data
    return response.data.coins.slice(0, 3).map(coin => ({
      item: {
        id: coin.item.id,
        name: coin.item.name,
        symbol: coin.item.symbol.toUpperCase(),
        price_change_percentage_24h: {
          usd: Math.random() * 10 * (Math.random() > 0.5 ? 1 : -1) // Random mock change
        }
      }
    }));
  } catch (error) {
    console.warn('Using fallback trending data due to API error:', error);
    // Return mock trending data
    return [
      {
        item: {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price_change_percentage_24h: { usd: 2.5 }
        }
      },
      {
        item: {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          price_change_percentage_24h: { usd: 1.8 }
        }
      },
      {
        item: {
          id: 'binancecoin',
          name: 'Binance Coin',
          symbol: 'BNB',
          price_change_percentage_24h: { usd: 3.2 }
        }
      }
    ];
  }
};