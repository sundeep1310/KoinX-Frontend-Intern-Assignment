export function Tokenomics() {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-[#0F1629] mb-6">Tokenomics</h2>
        <div>
          <h3 className="text-xl font-semibold text-[#1D1D1D] mb-4">Initial Distribution</h3>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
            {/* Donut Chart */}
            <div className="w-[189px] h-[189px] relative">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#0082FF"
                  strokeWidth="20"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="50.24"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#FAA002"
                  strokeWidth="20"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="200.96"
                  className="transform rotate-[288deg]"
                />
              </svg>
            </div>
  
            {/* Legend */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0082FF]"></div>
                <span>Crowdsale investors: 80%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FAA002]"></div>
                <span>Foundation: 20%</span>
              </div>
            </div>
          </div>
  
          <div className="text-[#3E424A] leading-7 space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
            </p>
            <p>
              Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis dignissim pellentesque porta estibulum aenean neque. Sit ut eu nisi sem in. Dictum netus sit adipiscing interdum proin ipsum ullamcorper ultrices. Tempus leo integer tristique diam commodo morbi tempus vitae suscipit.
            </p>
          </div>
        </div>
      </div>
    );
  }