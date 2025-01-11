import PropTypes from 'prop-types';

export function Overview({ coinData }) {
  // Set default values if coinData is null or undefined
  const data = {
    usd: coinData?.usd || 0,
    total_volume: coinData?.total_volume || 0,
    usd_24h_change: coinData?.usd_24h_change || 0
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#0F1629] mb-4">About Bitcoin</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2.5">What is Bitcoin?</h3>
              <p className="text-[#3E424A] leading-7">
                Bitcoins price today is US${data.usd.toLocaleString()}, with a 24-hour trading volume of ${data.total_volume.toLocaleString()}. BTC is {data.usd_24h_change > 0 ? '+' : ''}{data.usd_24h_change.toFixed(2)}% in the last 24 hours.
              </p>
            </div>

            {/* Rest of the component content */}
          </div>
        </div>
      </div>
    </div>
  );
}

Overview.propTypes = {
  coinData: PropTypes.shape({
    usd: PropTypes.number,
    total_volume: PropTypes.number,
    usd_24h_change: PropTypes.number
  })
};

Overview.defaultProps = {
  coinData: {
    usd: 0,
    total_volume: 0,
    usd_24h_change: 0
  }
};