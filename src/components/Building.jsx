/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './elements/Button'

const Building = () => {
  return (
    <div className='md:p-0 p-5'>
        <div className='md:w-[95%] m-auto md:mt-20 mt-8 md:gap-10 rounded-[50px] bg-primary flex md:flex-row flex-col-reverse items-center justify-between md:p-20 p-7'>
            <div className='md:space-y-4 space-y-2'>
                <div className='font-[600] md:text-[40px] text-[20px] text-white'>Building on Trust</div>
                <div className='text-white md:text-[16px] text-[12px]'>We know that working together as a community is better for everyone. Our platform enables blockchain developers to build their dApps and wallets natively and connect with millions of users, without having to worry about the low-level implementation details.</div>
                <Button 
                    text={"Check out our Developer Docs"}
                    btnStyle={'bg-white text-primary md:w-[300px] rounded-[30px] p-3'}
                />
            </div>

            <div className='flex justify-center'>
                <img className='md:w-[500px]' src="https://trustwallet.com/_next/static/media/raw.b373ab3f.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Building