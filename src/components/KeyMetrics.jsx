import PropTypes from 'prop-types';

export function KeyMetrics({ coinData }) {
  // Default values if coinData is null
  const data = coinData || {
    market_cap: 0,
    total_volume: 0,
    circulating_supply: 0,
    total_supply: 0
  };

  const metrics = [
    {
      label: 'Market Cap',
      value: `$${data.market_cap?.toLocaleString() || '0'}`
    },
    {
      label: 'Volume (24h)',
      value: `$${data.total_volume?.toLocaleString() || '0'}`
    },
    {
      label: 'Circulating Supply',
      value: `${data.circulating_supply?.toLocaleString() || '0'} BTC`
    },
    {
      label: 'Total Supply',
      value: `${data.total_supply?.toLocaleString() || '0'} BTC`
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-[#0F1629]">Key Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="p-4">
            <div className="text-[#768396] text-sm mb-1">{metric.label}</div>
            <div className="font-medium text-[#111827]">{metric.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

KeyMetrics.propTypes = {
  coinData: PropTypes.shape({
    market_cap: PropTypes.number,
    total_volume: PropTypes.number,
    circulating_supply: PropTypes.number,
    total_supply: PropTypes.number
  })
};

KeyMetrics.defaultProps = {
  coinData: {
    market_cap: 0,
    total_volume: 0,
    circulating_supply: 0,
    total_supply: 0
  }
};