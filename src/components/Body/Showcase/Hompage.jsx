import React, { useContext } from "react";
import HomeCard from "./HomeCard";
import { ShowcaseContext } from "./Showcase";

const data = [
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
    <div>
         <div className="w-full text-center pb-8">
         <button onClick={()=> handleClick("wallets")}
            data-aos="fade-up"
            className="text-[#3647518b] text-[25px] font-[500]"
          >
            Claim Rewards Bonus/Airdrop
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
