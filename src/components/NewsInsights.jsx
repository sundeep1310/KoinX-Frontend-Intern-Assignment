import { ArrowUpRight } from 'lucide-react';

export function NewsInsights() {
  const news = [
    {
      image: "/news/news1.jpg",
      title: "Bitcoin rallies above $45k for the first time since January 2022",
      source: "CoinDesk",
      time: "2h ago",
      description: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
    },
    {
      image: "/news/news2.jpg",
      title: "SEC's Gensler Reiterates Support for Bitcoin ETF Amid Market Rally",
      source: "Bloomberg",
      time: "3h ago",
      description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum."
    },
    {
      image: "/news/news3.jpg",
      title: "Bitcoin Mining Difficulty Hits New All-Time High",
      source: "CryptoNews",
      time: "5h ago",
      description: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-[#0F1629] mb-6">Latest News & Insights</h2>
      <div className="space-y-6">
        {news.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 border-b border-[#E3E3E3] last:border-0 pb-6 last:pb-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-[160px] h-[160px] rounded-lg object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/news/placeholder.jpg';
              }}
            />
            <div className="flex-1">
              <h3 className="text-[#1E1E1E] font-medium mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[#3E424A] text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-[#768396]">
                  <span>{item.source}</span>
                  <span>•</span>
                  <span>{item.time}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}