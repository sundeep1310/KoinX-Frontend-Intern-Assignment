import { ChevronRight, Newspaper, BarChart2 } from 'lucide-react';

export function Sentiments() {
  const keyEvents = [
    {
      icon: <Newspaper className="w-6 h-6 text-[#1D1D1D]" />,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      bgColor: "bg-[#E8F4FD]"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#1D1D1D]" />,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.",
      bgColor: "bg-[#EBF9F4]"
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-[#0F1629] mb-6">Sentiment</h2>

      <div className="space-y-6">
        {/* Key Events */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold text-[#1D1D1D]">Key Events</h3>
            <ChevronRight className="w-5 h-5 text-[#788F9B]" />
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {keyEvents.map((event, index) => (
              <div
                key={index}
                className={`${event.bgColor} rounded-lg p-4 min-w-[456px] max-w-[456px]`}
              >
                <div className="flex gap-2.5">
                  <div className="shrink-0">{event.icon}</div>
                  <div>
                    <h4 className="font-medium text-[#1D1D1D] mb-2">{event.title}</h4>
                    <p className="text-[#3E424A] text-sm leading-6">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analyst Estimates */}
        <div>
          <h3 className="text-xl font-semibold text-[#1D1D1D] mb-6">Analyst Estimates</h3>
          <div className="flex items-center gap-8">
            <div className="w-[116px] h-[116px] rounded-full bg-[#EBF9F4] flex items-center justify-center">
              <span className="text-3xl font-semibold text-[#0FBA83]">76%</span>
            </div>

            <div className="flex-1 space-y-4">
              {[
                { label: 'Buy', value: 76, color: 'bg-[#00B386]' },
                { label: 'Hold', value: 8, color: 'bg-[#C7C8CE]' },
                { label: 'Sell', value: 16, color: 'bg-[#F7324C]' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-8">
                  <span className="w-8 text-sm text-[#7C7E8C]">{item.label}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <span className="w-8 text-sm text-right text-[#7C7E8C]">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}