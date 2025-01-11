import PropTypes from 'prop-types';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function PriceSection({ coinData, coinId }) {
  if (!coinData) return null;

  const isPositiveChange = coinData.usd_24h_change >= 0;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center gap-8 mb-6">
        <div className="flex items-center gap-2">
          <img
            src={`/coins/${coinId}.svg`}
            alt={coinId}
            className="w-9 h-9"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/coins/placeholder.svg';
            }}
          />
          <h1 className="text-2xl font-semibold capitalize">{coinId}</h1>
          <span className="text-gray-500 uppercase">BTC</span>
          <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded">
            Rank #1
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-8">
          <div>
            <div className="text-3xl font-bold mb-1">
              ${coinData.usd.toLocaleString()}
            </div>
            <div className="text-gray-500">
              ₹{coinData.inr.toLocaleString()}
            </div>
          </div>
          <div className={`flex items-center gap-2 px-2 py-1 rounded ${
            isPositiveChange ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'
          }`}>
            {isPositiveChange ? (
              <TrendingUp className="w-5 h-5" />
            ) : (
              <TrendingDown className="w-5 h-5" />
            )}
            <span className="font-medium">
              {Math.abs(coinData.usd_24h_change).toFixed(2)}%
            </span>
            <span className="text-gray-500">(24H)</span>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <span className="text-gray-800">
          Bitcoin Price Chart (USD)
        </span>
      </div>
    </div>
  );
}

PriceSection.propTypes = {
  coinData: PropTypes.shape({
    usd: PropTypes.number.isRequired,
    inr: PropTypes.number.isRequired,
    usd_24h_change: PropTypes.number.isRequired
  }),
  coinId: PropTypes.string.isRequired
};