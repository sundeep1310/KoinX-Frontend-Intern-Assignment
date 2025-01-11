export function Header() {
    return (
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/koinx-logo.png" 
                alt="KoinX" 
                className="h-8" 
                onError={(e) => {
                  console.log('Logo failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </div>
  
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-base text-gray-700 hover:text-gray-900">
                Crypto Taxes
              </a>
              <a href="#" className="text-base text-gray-700 hover:text-gray-900">
                Free Tools
              </a>
              <a href="#" className="text-base text-gray-700 hover:text-gray-900">
                Resource Center
              </a>
              <button className="bg-[#0052FE] text-white px-6 py-2 rounded-lg font-medium">
                Get Started
              </button>
            </nav>
  
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-700 hover:text-gray-900">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="h-6 w-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16m-7 6h7" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }