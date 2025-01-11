import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TrendingUp, TrendingDown } from "lucide-react";
import { getCoinPrice, getTrendingCoins } from "../services/api";
import { Header } from "../components/Header";
import { TradingViewChart } from "../components/TradingViewChart";
import { Overview } from "../components/Overview";
import { Fundamentals } from "../components/Fundamentals";
import { Sentiments } from "../components/Sentiments";
import { Team } from "../components/Team";
import { Tokenomics } from "../components/Tokenomics";
import { Technicals } from "../components/Technicals";
import { NewsInsights } from "../components/NewsInsights";
import { YouMayAlike } from "../components/YouMayAlike";

function CoinPage() {
  const { coinId = "bitcoin" } = useParams();
  const [coinData, setCoinData] = useState({
    usd: 0,
    inr: 0,
    usd_24h_change: 0,
    total_volume: 0,
    market_cap: 0,
    market_cap_rank: 1,
    price_change_percentage_24h: 0,
  });
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [priceData, trending] = await Promise.all([
          getCoinPrice(coinId),
          getTrendingCoins(),
        ]);
        
        if (priceData && priceData[coinId]) {
          setCoinData(priceData[coinId]);
        }
        setTrendingCoins(trending || []);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [coinId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#EFF2F5] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const isPositiveChange = (coinData?.usd_24h_change || 0) >= 0;

  return (
    <div className="bg-[#EFF2F5]">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="py-4">
          <div className="flex items-center gap-2 text-[#3E424A] text-sm">
            <span>Cryptocurrencies</span>
            <span className="text-[#666666]">&gt;</span>
            <span className="capitalize">{coinId}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-5">
            {/* Coin Info Card */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img
                    src={`/coins/${coinId}.png`}
                    alt={coinId}
                    className="w-9 h-9"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/coins/placeholder.png";
                    }}
                  />
                  <h1 className="text-2xl font-semibold capitalize">{coinId}</h1>
                  <span className="text-gray-600 uppercase">BTC</span>
                </div>
                <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded">
                  Rank #{coinData.market_cap_rank}
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold">
                    ${coinData?.usd?.toLocaleString()}
                  </div>
                  <div
                    className={`flex items-center gap-2 px-2 py-1 rounded ${
                      isPositiveChange
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {isPositiveChange ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>
                      {Math.abs(coinData?.usd_24h_change || 0).toFixed(2)}%
                    </span>
                  </div>
                </div>
                <div className="text-gray-600">
                  ₹{coinData?.inr?.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Chart Card */}
            <div className="bg-white rounded-lg p-6">
              <TradingViewChart symbol={`${coinId.toUpperCase()}USDT`} />
            </div>

            {/* All Sections Stacked Vertically */}
            <div className="space-y-5">
              {/* Overview Section */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Overview</h2>
                <Overview coinData={coinData} />
              </div>

              {/* Fundamentals Section */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Fundamentals</h2>
                <Fundamentals coinData={coinData} />
              </div>

              {/* News & Insights Section */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">News & Insights</h2>
                <NewsInsights />
              </div>

              {/* Sentiments Section */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Sentiments</h2>
                <Sentiments />
              </div>

              {/* Team Section */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Team</h2>
                <Team />
              </div>

              {/* Technicals Section */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Technicals</h2>
                <Technicals />
              </div>

              {/* Tokenomics Section */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Tokenomics</h2>
                <Tokenomics />
              </div>

              {/* You May Also Like Section */}
              <div className="bg-white rounded-lg p-6">
                <YouMayAlike />
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-5">
              {/* Get Started Card */}
              <div className="bg-[#0052FE] rounded-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Get Started with KoinX<br />for FREE
                </h2>
                <p className="text-sm mb-6">
                  With our range of features that you can equip for free, KoinX
                  allows you to be more educated and aware of your tax reports.
                </p>
                <img
                  src="/get-started.png"
                  alt="Get Started"
                  className="mx-auto mb-6 w-40 h-40 object-contain"
                />
                <button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Get Started for FREE →
                </button>
              </div>

              {/* Trending Coins Card */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
                <div className="space-y-4">
                  {trendingCoins.slice(0, 3).map((coin, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={coin.item.small}
                          alt={coin.item.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="font-medium">{coin.item.name}</span>
                      </div>
                      <div
                        className={`flex items-center gap-1 ${
                          coin.item.data?.price_change_percentage_24h?.usd >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {coin.item.data?.price_change_percentage_24h?.usd >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {Math.abs(
                          coin.item.data?.price_change_percentage_24h?.usd || 0
                        ).toFixed(2)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinPage;