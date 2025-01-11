import { useEffect, useState } from 'react';

export function TradingViewChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('24H');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: selectedPeriod === '1H' ? '60' : 'D',
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_chart",
          hide_side_toolbar: true,
          hide_legend: true,
          save_image: false,
          height: "400",
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [selectedPeriod]);

  const periods = [
    { label: '1H', value: '1H' },
    { label: '24H', value: '24H' },
    { label: '7D', value: '7D' },
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
    { label: '6M', value: '6M' },
    { label: '1Y', value: '1Y' },
    { label: 'ALL', value: 'ALL' }
  ];

  return (
    <div>
      <div className="flex gap-4 mb-4 overflow-x-auto">
        {periods.map((period) => (
          <button
            key={period.value}
            onClick={() => setSelectedPeriod(period.value)}
            className={`px-3 py-1 rounded ${
              selectedPeriod === period.value
                ? 'bg-[#E2ECFE] text-[#0141CF] font-medium'
                : 'text-[#768396] hover:bg-gray-100'
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>
      <div className="relative h-[400px]">
        <div id="tradingview_chart" className="absolute inset-0" />
      </div>
    </div>
  );
}