import React from 'react'
import logo from '../../assets/logo.png'
import {FiMenu} from 'react-icons/fi'

const Header = () => {
  return (
    <div className='flex justify-between items-center lg:px-[6rem] md:px-[3rem] px-[1rem] pt-[1rem] '>
      <img className="w-[3em]" src={logo} alt="logo" />

      <button className="border rounded-md p-2 text-[2em]">
        <FiMenu />
      </button>
    </div>
  );
}

export default Header