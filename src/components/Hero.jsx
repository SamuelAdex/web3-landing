/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './elements/Button'
import heroImg from '../assets/img/web3-hero.png'
import { CiMobile1 } from "react-icons/ci";
import { SlScreenDesktop } from "react-icons/sl";

const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col items-center md:justify-evenly m-auto md:w-[95%] md:h-[100vh] md:pt-20 pt-24 p-4'>
        <div className='flex-[2.7] md:space-y-5 space-y-3'>
            <div className='md:text-[55px] md:leading-[60px] leading-[45px] font-[700] text-[40px]'>True crypto ownership.
            Powerful Web3 experiences</div>
            <div className='md:text-[20px] text-[14px] font-[500]'>Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.</div>

            <div className='flex items-center gap-4'>
                <button className='flex items-center gap-1 rounded-full ease-in duration-300 text-[#0500FF] px-3 py-2 md:w-[170px] w-full hover:text-white hover:bg-[#0500FF] justify-center border-[1px] border-[#0500FF]'>
                    <CiMobile1 className='md:text-4xl' />
                    <div className='flex flex-col items-start'>
                        <span className='md:text-[12px] text-[8px]'>Download</span>
                        <span className='md:text-[14px] text-[12px] font-[500]'>Mobile App</span>
                    </div>
                </button>
                <button className='flex items-center gap-1 rounded-full ease-in duration-300 text-[#0500FF] px-3 py-2 md:w-[170px] w-full hover:text-white hover:bg-[#0500FF] justify-center border-[1px] border-[#0500FF]'>
                    <SlScreenDesktop className='md:text-4xl' />
                    <div className='flex flex-col items-start'>
                        <span className='md:text-[12px] text-[8px]'>Download</span>
                        <span className='md:text-[14px] text-[12px] font-[500]'>Extension</span>
                    </div>
                </button>
            </div>
        </div>
        <div className='flex-[2.5] md:mt-0 mt-6'>
            <img src={heroImg} alt='' className='' />
        </div>
    </div>
  )
}

export default Hero