/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './elements/Button'
import { MdLanguage } from 'react-icons/md';
import trustLogo from '../assets/img/trustLogo.png'
import { NavLink, useNavigate  } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

  return (
    <header className='w-full fixed top-0 bg-white z-30'>
        <div className='flex justify-between items-center md:w-[95%] m-auto px-3 md:py-6 py-3'>
            <div className='flex-[2]'>
                <img className='md:w-[200px] w-[120px]' src={trustLogo} alt="" />
            </div>

            <div className='flex items-center md:flex-[4] text-[16px] gap-8'>
                <nav className='md:flex hidden items-center md:text-[16px] font-[500] w-full flex-[3] justify-between'>
                    <div className=''>Wallet</div>
                    <div className=''>Features</div>
                    <div className=''>Build</div>
                    <div className=''>Support</div>
                    <div className=''>About</div>
                </nav>
                <div className='flex items-center flex-[2] gap-4'>
                    <Button 
                        type={'outline'}
                        iconName={<MdLanguage />}
                        text={"Language"}
                        btnStyle={'rounded-[30px] md:flex hidden ease-in duration-300 border-primary text-primary hover:bg-[#0500FF] hover:text-white p-2 border-[#0500FF] border-[0.9px] text-[#0500FF] md:w-[100px]'}
                    />
                    <Button
                        text={"Get Started"}
                        onBtnClick={()=> navigate('register') }
                        btnStyle={'rounded-[30px] p-2 bg-[#0500FF] text-white md:w-[100px]'}
                    />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header