import { useState, useEffect, useCallback } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { getTrendingCoins } from '../services/api';

export function TrendingCoins() {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Polling interval in milliseconds (e.g., 30 seconds)
  const POLLING_INTERVAL = 30000;

  const fetchTrendingData = useCallback(async () => {
    try {
      const data = await getTrendingCoins();
      setTrending(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching trending coins:', error);
      setError('Failed to fetch trending coins');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchTrendingData();

    // Set up polling interval
    const intervalId = setInterval(fetchTrendingData, POLLING_INTERVAL);

    // Cleanup function to clear interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [fetchTrendingData]);

  if (error) {
    return (
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
        <div className="text-red-500">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
        <span>Trending Coins (24h)</span>
        {isLoading && (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        )}
      </h2>
      <div className="space-y-4">
        {trending.map((coin) => {
          const priceChange = coin.item.data?.price_change_percentage_24h?.usd || 0;
          const isPositive = priceChange >= 0;

          return (
            <div 
              key={coin.item.id} 
              className="flex items-center justify-between transition-all duration-300 hover:bg-gray-50 p-2 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <img
                  src={coin.item.small}
                  alt={coin.item.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-medium">
                  {coin.item.name}
                  <span className="text-gray-500 ml-2">
                    ({coin.item.symbol.toUpperCase()})
                  </span>
                </span>
              </div>
              <div 
                className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                  isPositive ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'
                }`}
              >
                {isPositive ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span className="font-medium">
                  {Math.abs(priceChange).toFixed(2)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}