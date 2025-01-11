import PropTypes from 'prop-types';

export function NavigationTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'fundamentals', label: 'Fundamentals' },
    { id: 'news-insights', label: 'News Insights' },
    { id: 'sentiments', label: 'Sentiments' },
    { id: 'team', label: 'Team' },
    { id: 'technicals', label: 'Technicals' },
    { id: 'tokenomics', label: 'Tokenomics' }
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="overflow-x-auto">
        <div className="flex gap-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 relative ${
                activeTab === tab.id
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

NavigationTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};