// SwapTokens.tsx
import { FaCog, FaExchangeAlt } from 'react-icons/fa';

const SwapTokens: React.FC = () => {
  return (
    <div className="bg-black bg-opacity-80 rounded-lg p-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-[#FAFAFA]">SWAP TOKENS</h2>
        <button className="text-[#FAFAFA] p-2">
          <FaCog size={24} />
        </button>
      </div>
      
      <div className="flex justify-between space-x-4">
        <div className="flex-1 bg-[#1E1E1E] rounded-l-lg p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <input type="number" placeholder="0.00" className="bg-transparent text-5xl text-[#FAFAFA] w-full outline-none" />
              <p className="text-[#666666] text-sm mt-1">$0.00</p>
            </div>
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

        <div className="flex items-center justify-center">
          <div className="bg-black rounded-full p-2">
            <FaExchangeAlt size={24} className="text-[#FAFAFA]" />
          </div>
        </div>

        <div className="flex-1 bg-[#1E1E1E] rounded-r-lg p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <input type="number" placeholder="0.00" className="bg-transparent text-5xl text-[#FAFAFA] w-full outline-none" />
              <p className="text-[#666666] text-sm mt-1">$0.00</p>
            </div>
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

      <button className="relative flex justify-center items-center w-[250px] h-[51px] bg-[#9945FF] backdrop-blur-[2px] rounded-tl-lg rounded-br-lg text-white font-roboto font-medium text-base leading-[19px]">
        SWOP TOKENS
      </button>

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