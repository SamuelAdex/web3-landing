/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../components/elements/Button'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className='flex md:flex-row flex-col'>
      <div className='bg-primary md:rounded-none rounded-bl-[20px] rounded-br-[20px] overflow-hidden flex-[1] flex relative h-[100dvh]'>
        <div className='p-5 md:space-y-3 relative z-10'>
          <div className='md:text-[55px] text-white text-[30px] md:leading-[60px] leading-[30px] font-[700]'>True crypto ownership.
          Powerful Web3 experiences</div>
          <div className="text-white text-opacity-90 md:text-[16px] text-[14px]">Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.</div>
        </div>
        <img src="https://trustwallet.com/_next/static/media/raw.0acff7b3.svg" className='absolute md:bottom-[-90px] md:w-[500px] w-[200px] right-0' alt="" />
      </div>
      <div className='flex-[1] grid place-items-center relative md:p-10 p-5'>
        <div className='relative w-full'>
          <div className=''></div>
          <MdClose className='absolute text-xl text-gray-400 cursor-pointer right-0' onClick={()=> navigate('/')} />
        </div>

        <div className='md:w-[80%] w-full md:space-y-5 space-y-3'>
          <div className='flex flex-col gap-1 w-full'>
            <label className=''>Wallet Name</label>
            <input className='p-3 w-full border-[1px] rounded-[8px] ' placeholder='enter wallet name...' />
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <label className=''>Wallet Address</label>
            <input className='p-3 w-full border-[1px] rounded-[8px] ' placeholder='enter wallet name...' />
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <label className=''>Enter the complete 12/24 mnemonic phrase</label>
            <textarea className='p-3 w-full rounded-[8px]  border-[1px] h-[150px] ' placeholder=''></textarea>
          </div>
          <Button
            text={"Continue to Wallet"}
            btnStyle={'bg-primary text-white p-3 rounded-[8px] w-full'}
          />
        </div>
      </div>
    </div>
  )
}

export default Register