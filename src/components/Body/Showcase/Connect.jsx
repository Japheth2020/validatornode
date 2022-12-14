import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { ShowcaseContext } from "./Showcase";
const Connect = () => {
  const { handleClick, currentWallet } = React.useContext(ShowcaseContext);
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);

  const handleConnect = () => {
    setShow(true);
    setTimeout(() => {
      setShow2(true);
      setShow(false);
      setShow3(true);
    }, 3000);
  };
  const handleConnect2 = () => {
      setShow3(false);
    setShow(true);
    setTimeout(() => {
      setShow2(true);
      setShow(false);
      setShow3(true);
    }, 3000);
  };

  const handleConnect3 = () => {
    handleClick("manual", currentWallet);
    };
  return (
    <div className="w-full">
      <div className="lg:w-[70%] w-[90%] m-auto text-[#3647518b] ">
        <button
          onClick={() => handleClick("wallets")}
          className="bg-[#F5F5F5] rounded-md p-2 text-[10px] flex gap-1 mb-[10px]"
        >
          <div className="flex items-center gap-1">
            <AiOutlineArrowLeft />{" "}
            <span className="text-[15px]">
              <AiOutlineHome />
            </span>
          </div>
          <span className="text-[14px]">home</span>
        </button>
        <div>
          {show3 && (
            <div className="flex justify-end w-full">
              <button onClick={handleConnect2} className="text-[2em] p-[1em]">
                <TfiReload />
              </button>
            </div>
          )}
          <div className="bg-[#5a7d9b0c] rounded-md border flex items-center gap-4 md:p-[4em] p-[1em] text-[#3647518b] ">
            {show && (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900 relative inset-0"></div>
            )}
            <img
              className="lg:w-[6em] md:w-[4em] w-[4em]"
              src={currentWallet.img}
              alt=""
            />
            <div>
              <h1>{currentWallet.name}</h1>
              {!show2 ? (
                <p>Connect selected wallet</p>
              ) : (
                <p className="text-red-300">
                  Failed to connect, click connect to synchronize manually
                </p>
              )}
              <button
                onClick={show3 ? handleConnect3 : handleConnect}
                className="py-[10px] px-[2em] rounded-md text-white bg-[#7db991]"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
