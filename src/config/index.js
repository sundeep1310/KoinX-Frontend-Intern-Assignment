export const config = {
    api: {
      coingecko: {
        baseUrl: import.meta.env.VITE_COINGECKO_API_URL || 'https://api.coingecko.com/api/v3',
        key: import.meta.env.VITE_COINGECKO_API_KEY,
        headers: {
          'x-cg-demo-api-key': import.meta.env.VITE_COINGECKO_API_KEY
        }
      }
    }
  };