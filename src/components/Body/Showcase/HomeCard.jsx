import React, { useContext } from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ShowcaseContext } from './Showcase';


const HomeCard = ({head, tagline}) => {
    const { handleClick, currentWallet } = useContext(ShowcaseContext); 
  return (
    <button onClick={()=> handleClick("wallets")} className='border-green-300 rounded border-[3px] p-8'>
    <p className='text-[24px]'><BsFillCheckCircleFill /></p>
    <p className='text-[18px] '>{head}</p>
    <p>{tagline}</p>
    </button>
  )
}

export default HomeCard