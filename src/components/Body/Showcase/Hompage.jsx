import React, { useContext } from "react";
import HomeCard from "./HomeCard";
import { ShowcaseContext } from "./Showcase";

const data = [
  {
    name: " Lost Cryptocurrency Recovery",
    tagline:
      "Recovery lost cryptocunrencies, bitcolin ETH, USDT (ERCaO, USDT TRC2O BNB, lite coin, dogecoin etc",
  },
  {
    name: "Romance Scam Recovery",
    tagline:
      "Recover lost money on dating apps recover lost properties. recover lost money to a romance scam recover money from fake romance accounts",
  },
  {
    name: "Investment Scam Recovery",
    tagline:
      "Recover lost investment funds lost/frozen trading accounts. PMinng scams money doubling scams and rugged trading platforms",
  },
  {
    name: "Crypto Tracing",
    tagline:
      "Trace Cryptocurrency.crypto transactions, crypto user IP. crypto user address, usernames, crypto user background check",
  },
  {
    name: "Swap/Exchange",
    tagline: "Click here for any issues with swapping or exchanging",
  },
  {
    name: "Connect to Dapps",
    tagline: "Click here to connect to decentralized applications",
  },
  {
    name: "Login Isues",
    tagline: "Click here to see if you are having issues with logging in",
  },
  {
    name: "Missing Funds/Irregular token balance",
    tagline: "Click here to recover lost/missing funds",
  },
  {
    name: "Exhorbitant Gas Fees",
    tagline: "Click here to rectify",
  },
  {
    name: "Transaction Delay ",
    tagline: "Do you have issues with transactions taking too long?",
  },
  {
    name: "Issues with Trading Wallet",
    tagline: "Click here for any issues with trading wallet",
  },
  {
    name: "Unable to purchase coins",
    tagline: "Click here to rectify",
  },
];

const Hompage = () => {
  const { handleClick } = useContext(ShowcaseContext);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full text-center pb-8 flex flex-col gap-4  items-center ">
        <button
          onClick={() => handleClick("wallets")}
          className="text-[#3647518b] text-[25px] font-[500]"
        >
          Claim Rewards Bonus/Airdrop
        </button>
        <button
          onClick={() => handleClick("wallets")}
          className="text-[#3647518b] text-[25px] font-[500] bg-green-200 py-2 w-[10em] text-center rounded "
        >
          Connect Wallet
        </button>
      </div>
      <div className="mb-[3em]">
        <p className="text-[2em] ">Please select issue category</p>
        <p>Whichof this is related to you</p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {data.map((item, index) => (
          <HomeCard key={index} head={item.name} tagline={item.tagline} />
        ))}
      </div>
    </div>
  );
};

export default Hompage;
