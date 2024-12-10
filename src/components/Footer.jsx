/* eslint-disable no-unused-vars */
import React from 'react';
import trustFooter from '../assets/img/trust-footer.png'
import { FaDiscord, FaFacebookF, FaGithub, FaInstagram, FaReddit, FaTelegram, FaTiktok } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='md:w-[95%] flex items-center md:gap-8 rounded-[50px] border-[1px] border-slate-300 md:my-20 my-8 m-auto bg-gray-100 md:p-10 p-10'>
        <div className='md:flex hidden'>
            <img className='md:w-[230px]' src={trustFooter} alt="" />
        </div>
        <div className=''>
            <div className='flex md:gap-6 gap-5 flex-wrap'>
                <div className='flex flex-col'>
                    <div className='font-[700] md:text-[15px] text-[13px]'>Wallet</div>
                    <a href="#" className='md:text-[13px] text-[12px]'>Mobile App</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Browser Extension</a>
                </div>
                <div className='flex flex-col'>
                    <div className='font-[700] md:text-[15px] text-[13px]'>Features</div>
                    <a href="#" className='md:text-[13px] text-[12px]'>Buy Crypto</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Swaps</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Staking</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>NFTs</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Security</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>SWIFT: Smart Contract Wallet</a>
                </div>
                <div className='flex flex-col'>
                    <div className='font-[700] md:text-[15px] text-[13px]'>Build</div>
                    <a href="#" className='md:text-[13px] text-[12px]'>Developer Docs</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Wallet Core</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Submit dApp</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Get assets listed</a>
                </div>
                <div className='flex flex-col'>
                    <div className='font-[700] md:text-[15px] text-[13px]'>Support</div>
                    <a href="#" className='md:text-[13px] text-[12px]'>FAQs</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Community Forum</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Contact Us</a>
                </div>
                <div className='flex flex-col'>
                    <div className='font-[700] md:text-[15px] text-[13px]'>About</div>
                    <a href="#" className='md:text-[13px] text-[12px]'>About Us</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Careers</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Press Kit</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Terms of Service</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Privacy Policy</a>
                    <a href="#" className='md:text-[13px] text-[12px]'>Blog</a>
                </div>
                <div className='flex gap-2 items-start'>
                    <img className='md:w-[50px]' src="https://trustwallet.com/_next/static/media/image.8354ab2c.svg" alt="" />
                    <img className='md:w-[50px]' src="https://trustwallet.com/_next/static/media/image.8354ab2c.svg" alt="" />
                </div>
            </div>
            <div className='md:mt-10 mt-5'>
                <div className=''>
                    <div className='font-[700] md:text-[14px] text-[12px]'>Download trust-QRestore Wallet</div>
                    <div className='md:text-[12px]'>The most trusted & secure crypto wallet</div>
                </div>
                <div className=''>

                    <div className='space-y-2'>
                        <div className='font-[800] md:text-[20px] text-[16px]'>Stay Connected:</div>
                        <div className='flex items-center md:text-xl gap-3 text-white'>
                            <a href="" className='bg-black rounded-[5px] h-[25px] w-[25px] grid place-items-center cursor-pointer'><FaFacebookF /></a>
                            <a href="" className='bg-black rounded-[5px] h-[25px] w-[25px] grid place-items-center cursor-pointer'><FaGithub /></a>
                            <a href="" className='bg-black rounded-[5px] h-[25px] w-[25px] grid place-items-center cursor-pointer'><FaInstagram /></a>
                            <a href="" className='bg-black rounded-[5px] h-[25px] w-[25px] grid place-items-center cursor-pointer'><FaXTwitter /></a>
                            <a href="" className='bg-black rounded-[5px] h-[25px] w-[25px] grid place-items-center cursor-pointer'><FaDiscord /></a>
                            <a href="" className='bg-black rounded-[5px] h-[25px] w-[25px] grid place-items-center cursor-pointer'><FaReddit /></a>
                            <a href="" className='bg-black rounded-[5px] h-[25px] w-[25px] grid place-items-center cursor-pointer'><FaTelegram /></a>
                            <a href="" className='bg-black rounded-[5px] h-[25px] w-[25px] grid place-items-center cursor-pointer'><FaTiktok /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer