// SwapTokens.tsx
import { FaCog, FaExchangeAlt } from "react-icons/fa";

const SwapTokens: React.FC = () => {
  return (
    <div className="bg-black bg-opacity-80 rounded-lg p-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-[#FAFAFA]">SWAP TOKENS</h2>
        <button className="text-[#FAFAFA] p-2">
          <img src="/Vector.png" alt="Cog Icon" />
        </button>
      </div>

      <div className="flex justify-between">
        {/* Left Panel */}
        <div className="flex-1 bg-[#1E1E1E] rounded-l-lg p-5">
          <div className="flex justify-between p-2 m-2">
            <div>
              <input
                type="number"
                placeholder="0.00"
                className="bg-transparent text-5xl text-[#FAFAFA] w-full outline-none"
              />
              <p className="text-[#666666] text-sm mt-1">$0.00</p>
            </div>
            <div>
              <div>
                <img src="/ETH.png" alt="ETH" />
                <button className="flex items-center bg-black px-4 py-2 rounded text-[#868686]">
                  <span className="mr-2">BTC</span>
                  <span>▼</span>
                </button>
              </div>
              <div className="text-[#FAFAFA] text-sm">
                <span className="text-[#FAFAFA]">Balance: </span>
                <span className="text-[#3980FF]">24,240</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Panel (Swap Icon) */}
        <div className="flex items-center justify-center mx-4">
          <div className="bg-black rounded-full p-2">
            <img
              src="/iconoir_coins-swap.png"
              alt="Swap Icon"
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-[#1E1E1E] rounded-r-lg p-5">
          <div className="flex justify-between p-2 m-2">
            <div>
              <input
                type="number"
                placeholder="0.00"
                className="bg-transparent text-5xl text-[#FAFAFA] w-full outline-none"
              />
              <p className="text-[#666666] text-sm mt-1">$0.00</p>
            </div>
            <div>
              <div>
                <button className="flex items-center bg-black px-4 py-2 rounded text-[#868686]">
                  <span className="mr-2">BNB</span>
                  <span>▼</span>
                </button>
              </div>
              <div className="text-[#FAFAFA] text-sm">
                <span className="text-[#FAFAFA]">Balance: </span>
                <span className="text-[#3980FF]">63,790</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="invisible ...">01</div>
        <div className=" relative flex justify-center items-center p-4 m-4">
          <button className="relative flex justify-center items-center w-[250px] h-[51px] bg-[#9945FF] backdrop-blur-[2px] rounded-tl-lg rounded-br-lg text-white font-roboto font-medium text-base leading-[19px]">
            SWOP TOKENS
          </button>
        </div>
        <div className="invisible ...">03</div>
      </div>

      <div className="flex justify-between items-center mt-6 text-sm">
        <div>
          <span className="text-[#FAFAFA]">1 BTC = 32.4039 ETH</span>
          <span className="text-[#3980FF] ml-2">Free exchange</span>
        </div>
        <span className="text-[#666666]">Updates in 4s</span>
      </div>
    </div>
  );
};

export default SwapTokens;
