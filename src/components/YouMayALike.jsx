import { TrendingUp, TrendingDown } from 'lucide-react';

export function YouMayAlike() {
  const similarCoins = [
    {
      name: 'BNB',
      price: '$319.34',
      change: '+0.52%',
      isPositive: true
    },
    {
      name: 'SOL',
      price: '$109.33',
      change: '+2.89%',
      isPositive: true
    },
    {
      name: 'XRP',
      price: '$0.634810',
      change: '+0.78%',
      isPositive: true
    },
    {
      name: 'ADA',
      price: '$0.614869',
      change: '-1.57%',
      isPositive: false
    },
    {
      name: 'AVAX',
      price: '$41.05',
      change: '+3.78%',
      isPositive: true
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-4">You May Also Like</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4 pb-4 min-w-max">
          {similarCoins.map((coin, index) => (
            <div key={index} className="w-[252px] p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={`/coins/${coin.name.toLowerCase()}.png`}
                  alt={coin.name}
                  className="w-6 h-6 rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/coins/placeholder.png';
                  }}
                />
                <span className="font-medium">{coin.name}</span>
                <span className={`flex items-center gap-1 ml-auto ${
                  coin.isPositive ? 'text-green-500' : 'text-red-500'
                }`}>
                  {coin.isPositive ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {coin.change}
                </span>
              </div>
              <div className="font-bold mb-2">{coin.price}</div>
              <img
                src={`/graphs/${coin.name.toLowerCase()}.png`}
                alt={`${coin.name} price graph`}
                className="w-full h-[96px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}