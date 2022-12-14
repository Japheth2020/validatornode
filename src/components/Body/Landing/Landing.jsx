import { useEffect } from "react";
// import { SlMagnifier } from "react-icons/sl";
import Aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
      useEffect(() => {
        Aos.init({ duration: 1900 });
      }, []);

  return (
    <div className="py-[4em] text-center w-full ">
      <div className="md:w-[65%] w-[90%] m-auto">
        <h1
          data-aos="fade-up"
          className="md:text-[66px] text-[40px] text-[#7db991] font-[700] md:leading-[80px]"
        >
          Decentralized Wallet Applications
        </h1>

        <div
          data-aos="fade-up"
          className="py-[2em] md:w-[80%] m-auto flex flex-col gap-8"
        >
          <p
            data-aos="fade-up"
            className="text-[#3647518b] text-[25px] font-[500]"
          >
            Claim Rewards Bonus/Airdrop
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Landing;
