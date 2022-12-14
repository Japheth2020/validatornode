import React from "react";
import { walletList } from "../../assets/images";
import Card from "./Card";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Wallets = () => {
  const [walletCount, setWalletCount] = React.useState({ prev: 0, next: 10 });

  // const handlePlus () =>{

  // }

  const handleWallets = (action) => {
    console.log(action, walletCount);
    if (
      walletCount.next <= 20 &&
      walletCount.prev >= 0 &&
      walletCount.prev !== 20
    ) {
      if (action === "plus") {
        setWalletCount({
          prev: walletCount.prev + 10,
          next: walletCount.next + 10,
        });
      } else {
        setWalletCount({
          prev: walletCount.prev - 10,
          next: walletCount.next - 10,
        });
      }
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:w-[70%] w-[90%] m-auto">
        {walletList
          .slice(walletCount.prev, walletCount.next)
          .map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                img={item.img}
                tagline={item.tagline}
              />
            );
          })}
      </div>

      <div className="w-full my-[2em] flex">
        <div className="flex gap-8 m-auto">
          {" "}
          <button
            onClick={() => handleWallets("minus")}
            className="bg-gray-500 rounded-md p-2 text-white font-[900]"
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            onClick={() => handleWallets("plus")}
            className="bg-gray-500 rounded-md p-2 text-white font-[900]"
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
