import React from "react";
import Connect from "./Connect";
import { createContext } from "react";
import Wallets from "./Wallets";
import Manual from "./Manual";
import Hompage from "./Hompage";

export const ShowcaseContext = createContext();

const Showcase = () => {
  const [currentWallet, setCurrentWallet] = React.useState(null);
  const [display, setDisplay] = React.useState("home");
  const [loading, setLoading] = React.useState(false);

   const handleClick = (name, wallet) => {

    setLoading(true);
    setCurrentWallet(wallet)

    setTimeout(() => {
      setDisplay(name);
      setLoading(false);
    }, 2000);
  };
  return (
    <ShowcaseContext.Provider
      value={{ currentWallet, setCurrentWallet, handleClick, loading }}
    >
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="flex justify-between items-center lg:px-[6rem] md:px-[3rem] px-[1rem] pt-[1rem]  ">
          {display === "wallets" && <Wallets />}
          {display === "connect" && <Connect />}
          {display === "manual" && <Manual />}
          {display === "home" && <Hompage />}

        </div>
      )}
    </ShowcaseContext.Provider>
  );
};

export default Showcase;
