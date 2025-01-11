export function Technicals() {
    const indicators = [
      { name: 'Moving Averages', signal: 'Buy', value: '12/12' },
      { name: 'RSI (14)', signal: 'Neutral', value: '56.65' },
      { name: 'MACD (12,26)', signal: 'Buy', value: '' },
      { name: 'Stochastic RSI Fast (3,3,14,14)', signal: 'Sell', value: '38.62' },
      { name: 'ADX (14)', signal: 'Buy', value: '31.85' },
      { name: 'CCI (20)', signal: 'Buy', value: '66.62' },
      { name: 'Average Volume', signal: 'Neutral', value: '4,11,900' }
    ];
  
    const oscillators = [
      { name: 'Relative Strength Index (14)', value: 56.65 },
      { name: 'MACD Level (12, 26)', value: 'Strong Buy' },
      { name: 'Stochastic %K (14, 3, 3)', value: 'Neutral' }
    ];
  
    const movingAverages = [
      { name: 'MA10', value: 'Strong Buy' },
      { name: 'MA20', value: 'Buy' },
      { name: 'MA50', value: 'Buy' },
      { name: 'MA100', value: 'Buy' },
      { name: 'MA200', value: 'Strong Buy' }
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-6">Technical Analysis</h2>
  
        {/* Buy/Sell Gauge */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="transform -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#E4E4E4"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#16A34A"
                strokeWidth="10"
                strokeDasharray="213 283"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#16A34A]">76</div>
                <div className="text-sm text-gray-500">Buy Signal</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Technical Indicators */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Indicator</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Value</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {indicators.map((indicator, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4 text-gray-600">{indicator.name}</td>
                      <td className="py-3 px-4">{indicator.value}</td>
                      <td className={`py-3 px-4 font-medium ${
                        indicator.signal === 'Buy' ? 'text-green-600' :
                        indicator.signal === 'Sell' ? 'text-red-600' :
                        'text-yellow-600'
                      }`}>
                        {indicator.signal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Oscillators */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Oscillators</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {oscillators.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4 text-gray-600">{item.name}</td>
                      <td className="py-3 px-4 font-medium">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Moving Averages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Moving Averages</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Length</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {movingAverages.map((ma, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4 text-gray-600">{ma.name}</td>
                      <td className={`py-3 px-4 font-medium ${
                        ma.value.includes('Buy') ? 'text-green-600' :
                        ma.value.includes('Sell') ? 'text-red-600' :
                        'text-yellow-600'
                      }`}>
                        {ma.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }