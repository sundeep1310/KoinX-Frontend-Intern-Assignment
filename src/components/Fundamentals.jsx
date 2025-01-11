import PropTypes from 'prop-types';
import { InfoIcon } from 'lucide-react';

export function Fundamentals({ coinData }) {
  const fundamentals = [
    {
      title: "Bitcoin Price",
      value: `$${coinData?.usd?.toLocaleString() || "0"}`
    },
    {
      title: "24h Low / 24h High",
      value: `$46,930.22 / $49,343.83`
    },
    {
      title: "7d Low / 7d High",
      value: `$45,290.22 / $49,743.83`
    },
    {
      title: "Trading Volume",
      value: `$${coinData?.total_volume?.toLocaleString() || "0"}`
    },
    {
      title: "Market Cap Rank",
      value: "#1"
    },
    {
      title: "Market Cap",
      value: `$${coinData?.market_cap?.toLocaleString() || "0"}`
    },
    {
      title: "Market Cap Dominance",
      value: "38.343%"
    },
    {
      title: "Volume / Market Cap",
      value: ((coinData?.total_volume || 0) / (coinData?.market_cap || 1)).toFixed(4)
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-5">
        <h2 className="text-xl font-semibold text-[#1D1D1D]">Fundamentals</h2>
        <InfoIcon className="w-5 h-5 text-[#7C7E8C]" />
      </div>

      <div className="grid md:grid-cols-2 gap-x-20">
        {fundamentals.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b border-[#D3DFEE] last:border-b-0"
          >
            <span className="text-[#768396]">{item.title}</span>
            <span className="text-[#111827] font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Fundamentals.propTypes = {
  coinData: PropTypes.shape({
    usd: PropTypes.number,
    market_cap: PropTypes.number,
    total_volume: PropTypes.number
  })
};