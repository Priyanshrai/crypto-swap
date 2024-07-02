// Home.tsx
"use client";

import Image from "next/image";
import CryptoTable from "../components/CryptoTable";
import SwapTokens from "../components/SwapTokens";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen text-white ml-32 mr-32">
      <div className="container mx-auto px-4 ">
        <header className="flex justify-between items-center py-4">
          <div className="w-[193px] h-[25px]">
            <Image
              src="/BlockChain.svg"
              alt="BLOCKCHAIN"
              width={187}
              height={14}
              className="object-contain"
            />
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li className="hover:text-gray-300 cursor-pointer">Exchange</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Last Transactions
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
                Invite Friend
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
                Notifications
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-[#9945FF] rounded-tl-lg rounded-br-lg">
              LOG IN
            </button>
            <button className="px-4 py-2 bg-[#9945FF] rounded-tl-lg rounded-br-lg">
              SIGN UP
            </button>
          </div>
        </header>
        <div className="relative mt-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-6xl font-bold mb-4">
            Easy send and Request Crypto.
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bring blockchain to the people. Solana supports experiences for
            power users, new consumers, and everyone in between.
          </p>
        </div>

        <div className="relative mt-20">
          <CryptoTable />
        </div>

        <div className="mt-20">
          <SwapTokens />
        </div>
      </div>
    </main>
  );
};

export default Home;
