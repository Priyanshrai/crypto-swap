import { useState } from "react";
import { FaCog, FaExchangeAlt } from "react-icons/fa";

const SwapTokens: React.FC = () => {
  const [leftCrypto, setLeftCrypto] = useState({
    symbol: "BTC",
    balance: "24,240",
    image: "/btc.png",
  });

  const [rightCrypto, setRightCrypto] = useState({
    symbol: "BNB",
    balance: "63,790",
    image: "/bnb.png",
  });

  const handleSwap = () => {
    const temp = leftCrypto;
    setLeftCrypto(rightCrypto);
    setRightCrypto(temp);
  };

  return (
    <div className="bg-black bg-opacity-80 rounded-lg p-4 mb-32 border border-gray-600 shadow">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-[#FAFAFA]">SWAP TOKENS</h2>
        <button className="text-[#FAFAFA] p-2">
          <FaCog size={24} />
        </button>
      </div>
      <div className="relative">
        <div className="flex justify-between gap-2">
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
                <div className="flex items-center bg-black px-4 py-2 rounded text-[#868686]">
                  <div className="pr-2">
                    <img src={leftCrypto.image} alt={leftCrypto.symbol} />
                  </div>
                  <button>
                    <div className="flex">
                      <span className="mr-2 pt-1">{leftCrypto.symbol}</span>
                      <img src="/arrow.png" alt="Arrow Icon" />
                    </div>
                  </button>
                </div>
                <div className="text-[#FAFAFA] mt-2 text-sm">
                  <span className="text-[#FAFAFA]">Balance: </span>
                  <span className="text-[#3980FF]">{leftCrypto.balance}</span>
                </div>
              </div>
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
                <div className="flex items-center bg-black px-4 py-2 rounded text-[#868686]">
                  <div className="pr-2">
                    <img src={rightCrypto.image} alt={rightCrypto.symbol} />
                  </div>
                  <button>
                    <div className="flex">
                      <span className="mr-2 pt-1">{rightCrypto.symbol}</span>
                      <img src="/arrow.png" alt="Arrow Icon" />
                    </div>
                  </button>
                </div>
                <div className="text-[#FAFAFA] mt-2 text-sm">
                  <span className="text-[#FAFAFA]">Balance: </span>
                  <span className="text-[#3980FF]">{rightCrypto.balance}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full p-3 z-10"
          >
            <img src="/iconoir_coins-swap.png" alt="" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="invisible">01</div>
        <div className="relative flex justify-center items-center p-4 m-4">
          <button className="relative flex justify-center items-center w-[250px] h-[51px] bg-[#9945FF] backdrop-blur-[2px] rounded-tl-lg rounded-br-lg text-white font-roboto font-medium text-base leading-[19px]">
            SWAP TOKENS
          </button>
        </div>
        <div className="invisible">03</div>
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
