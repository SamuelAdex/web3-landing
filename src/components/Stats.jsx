/* eslint-disable no-unused-vars */
import React from 'react'

const Stats = () => {
  return (
    <div className='md:mt-10 mt-5'>
        <div className='flex flex-wrap justify-center gap-8 md:text-[28px] text-[20px] md:font-[700] font-[700]'>
            <div className='text-center md:w-[200px] md:leading-[30px]'>Trusted By <br /><span className='text-primary'>140M</span> People</div>
            <div className='text-center md:w-[200px] md:leading-[30px]'>Founded in <br /><span className='text-primary'>2017</span></div>
            <div className='text-center md:w-[200px] md:leading-[30px]'>Independently <span className='text-primary'><br />Audited</span></div>
            <div className='text-center md:w-[200px] md:leading-[30px]'>ISO <span className='text-primary'><br />Certified</span></div>
            <div className='text-center md:w-[200px] md:leading-[30px]'>Top reviews <span className='text-primary'><br />Certified</span></div>
        </div>
    </div>
  )
}

export default Stats