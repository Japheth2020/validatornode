import React from "react";
import { useContext } from "react";
import { ShowcaseContext } from "./Showcase";

const Card = ({ name, img, tagline }) => {
  const {  handleClick } =
    useContext(ShowcaseContext);

  return (
    <button
      onClick={()=>handleClick("connect", {name, img, tagline})}
      className="bg-[#5a7d9b0c] rounded-md border flex items-center gap-4 p-[2em] text-[#3647518b] "
    >
      <img className="lg:w-[6em] md:w-[4em] w-[3em]" src={img} alt={name} />

      <div>
        <p className="font-[500] md:text-[1.5em]  ">{name}</p>
        <span className="text-[12px] ">{tagline}</span>
      </div>
    </button>
  );
};

export default Card;
