import { SetStateAction, useState } from "react";
import { FaCog } from "react-icons/fa";

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

  const [leftValue, setLeftValue] = useState("0.00");
  const [rightValue, setRightValue] = useState("0.00");

  const handleSwap = () => {
    const tempCrypto = leftCrypto;
    setLeftCrypto(rightCrypto);
    setRightCrypto(tempCrypto);

    const tempValue = leftValue;
    setLeftValue(rightValue);
    setRightValue(tempValue);
  };

  const handleLeftValueChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLeftValue(event.target.value);
  };

  const handleRightValueChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setRightValue(event.target.value);
  };

  return (
    <div className="backdrop-blur-2xl rounded-lg p-8 mb-32 border border-gray-600 shadow">
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
              <div className="text-white">
                <input
                  type="number"
                  value={leftValue}
                  onChange={handleLeftValueChange}
                  placeholder="0.00"
                  className={`bg-transparent font-semibold text-5xl w-full outline-none ${
                    leftValue === "0" ? "text-white" : "text-white"
                  }`}
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
                <div className="text-[#FAFAFA] mt-2 flex text-sm">
                  <span className="text-[#FAFAFA]">Balance: </span>
                  <span className="text-[#3980FF] ml-1">
                    {leftCrypto.balance}
                  </span>
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
                  value={rightValue}
                  onChange={handleRightValueChange}
                  placeholder="0.00"
                  className={`bg-transparent font-semibold text-5xl w-full outline-none ${
                    rightValue === "0" ? "text-white" : "text-white"
                  }`}
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
                <div className="text-[#FAFAFA] mt-2  flex text-sm">
                  <span className="text-[#FAFAFA]">Balance: </span>
                  <span className="text-[#3980FF] ml-1">
                    {rightCrypto.balance}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full p-3 z-10"
          >
            <img src="/iconoir_coins-swap.png" />
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
          <div>
            {" "}
            <span className="text-[#FAFAFA]">1 BTC = 32.4039 ETH</span>
          </div>
          <div>
            {" "}
            <span className="text-[#3980FF]">Free exchange</span>
          </div>
        </div>
        <span className="text-[#666666]">Updates in 4s</span>
      </div>
    </div>
  );
};

export default SwapTokens;
