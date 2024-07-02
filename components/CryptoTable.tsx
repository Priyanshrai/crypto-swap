import { useState, useEffect } from "react";
import Image from "next/image";

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  price_change_24h: number;
}

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin,algorand,polkadot,uniswap,compound"
        );
        const data: CryptoData[] = await response.json();
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
        setLoading(false);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white text-lg animate-pulse">Loading...</div>
      </div>
    );

  const formatNumber = (number: string | number | bigint) => {
    if (typeof number === "string") {
      const parsedNumber = parseFloat(number);
      if (isNaN(parsedNumber)) {
        return number; // Return the original string if it's not a valid number
      }
      return new Intl.NumberFormat("en-US").format(parsedNumber);
    } else {
      return new Intl.NumberFormat("en-US").format(number);
    }
  };

  return (
    <div className="  backdrop-blur-2xl rounded-lg p-8 border border-gray-600 shadow ">
      <table className="w-full ">
        <thead className="border-b-2 border-gray-600">
          <tr className="text-white">
            <th className="text-left">Assets</th>
            <th className="text-left">Last Trade</th>
            <th className="text-left">24H %</th>
            <th className="text-left">24H Change</th>
            <th className=" text-blue-500">More &gt;</th>
          </tr>
        </thead>

        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.id} className="text-white">
              <td className="py-4 px-4 items-center">
                <div className="flex items-center">
                  <div className="h-auto w-auto">
                    <Image
                      src={crypto.image}
                      alt={crypto.name}
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                  </div>
                  <div className="mt-1">
                    {crypto.symbol.toUpperCase()}
                    <span className="text-gray-500">/USD</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 items-center">
                ${formatNumber(crypto.current_price.toFixed(2))}
              </td>
              <td
                className={`py-4 px-4 items-center ${
                  crypto.price_change_percentage_24h >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td
                className={`py-4 px-4 items-center ${
                  crypto.price_change_24h >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {crypto.price_change_24h < 0 && "-"}$
                {formatNumber(Math.abs(crypto.price_change_24h).toFixed(2))}
              </td>
              <td className="py-4 px-4 text-center">
                <button className="bg-green-400 text-black px-4 py-2 rounded">
                  Trade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
