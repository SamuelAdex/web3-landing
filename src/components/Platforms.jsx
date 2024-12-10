/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import Button from './elements/Button'
import { useNavigate } from 'react-router-dom'

const Platforms = () => {
    const navigate = useNavigate();
  return (
    <div className='md:w-[95%] m-auto md:mt-20 mt-5'>
        <div className='rounded-[40px] overflow-hidden'>
            <section className='md:p-10 md:space-y-6 space-y-4 p-5 bg-gradient-to-tr from-blue-400 to-blue-600'>
                <div className='text-center'>
                    <div className='md:text-[60px] text-white text-[30px] md:leading-normal leading-[30px] font-[700]'>One Platform, Millions of Assets</div>
                    <p className="md:text-[20px] md:mt-0 mt-2 m-auto md:w-[800px] text-[13px] text-white font-[500]">As a leading self-custody multi-chain platform, we support millions of assets across 100+ blockchains. From Bitcoin, Ethereum, and Solana, to Cosmos, Optimism, and much more.</p>
                </div>

                <div className='md:w-[93%] m-auto flex items-center bg-white rounded-[40px] p-4 px-5 gap-3'>
                    <FaSearch className='' />
                    <input className='focus:outline-none w-full' placeholder='Search a chain' />
                </div>
                <div className='md:w-[93%] m-auto bg-white rounded-[40px] p-4 px-5'>
                    <table className='w-full overflow-auto'>
                        <thead className='w-full md:text-[14px] text-[12px]'>
                            <td>Chain</td>
                            <td>Buy</td>
                            <td>Sell</td>
                            <td>Swap</td>
                            <td>Earn</td>
                            <td>dApps</td>
                        </thead>
                        <tbody className=''>
                            <tr className=''>
                                <td>
                                    <div className='inline-flex md:text-[14px] py-4 text-[10px] items-center gap-3'>
                                        <img className='md:w-[50px] w-[20px]' src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fassets-cdn.trustwallet.com%2Fblockchains%2Fsmartchain%2Finfo%2Flogo.png&w=96&q=75" alt="" />
                                        BNB Smart Chain (BNB)
                                    </div>
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='inline-flex md:text-[14px] py-4 text-[10px] items-center gap-3'>
                                        <img className='md:w-[50px] w-[20px]' src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fassets-cdn.trustwallet.com%2Fblockchains%2Fbitcoin%2Finfo%2Flogo.png&w=96&q=75" alt="" />
                                        Bitcoin (BTC)
                                    </div>
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='inline-flex md:text-[14px] py-4 text-[10px] items-center gap-3'>
                                        <img className='md:w-[50px] w-[20px]' src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fassets-cdn.trustwallet.com%2Fblockchains%2Fcosmos%2Finfo%2Flogo.png&w=96&q=75" alt="" />
                                        Cosmos (ATOM)
                                    </div>
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='inline-flex md:text-[14px] py-4 text-[10px] items-center gap-3'>
                                        <img className='md:w-[50px] w-[20px]' src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fassets-cdn.trustwallet.com%2Fblockchains%2Fethereum%2Finfo%2Flogo.png&w=96&q=75" alt="" />
                                        Ethereum (ETH)
                                    </div>
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='inline-flex md:text-[14px] py-4 text-[10px] items-center gap-3'>
                                        <img className='md:w-[50px] w-[20px] rounded-full' src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fassets-cdn.trustwallet.com%2Fblockchains%2Fpolkadot%2Finfo%2Flogo.png&w=96&q=75" alt="" />
                                        Polkadot (DOT)
                                    </div>
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                                <td>
                                    <img src="https://trustwallet.com/_next/static/media/raw.e4b77b0f.svg" alt="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='md:flex hidden justify-between md:text-[30px] m-auto md:w-[93%] p-4 px-5 text-white font-[600]'>
                    <div className=''>10M+ Assets</div>
                    <div className=''>600M NFTs</div>
                    <div className=''>100+ Blockchains</div>
                </div>
            </section>

            <section className='md:p-10 md:space-y-6 space-y-4 p-5 bg-gradient-to-br from-yellow-200 to-purple-400'>
                <div className='text-center'>
                    <div className='md:text-[60px] text-black text-[30px] font-[700]'>Simple. Seamless.</div>
                    <p className="md:text-[20px] m-auto md:w-[800px] text-[13px] md:mt-0 mt-2 text-back font-[500]">Enjoy a smooth mobile app and desktop experience with easy-to-use, powerful tools to support your entire Web3 journey.</p>
                </div>


                <div className='md:w-[95%] bg-white m-auto overflow-hidden flex md:flex-row flex-col-reverse relative items-center md:rounded-[50px] rounded-[30px] md:p-10 md:py-20 p-8'>
                    <div className='md:space-y-4 space-y-2 flex-[2.5]'>
                        <div className='md:text-[40px] text-[20px] md:leading-[50px] font-[600]'>Deposit crypto easily from exchanges</div>
                        <div className='md:text-[16px] text-[12px]'>Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges like Binance and Coinbase.</div>
                        <Button
                            text={"Get started with deposits"}
                            btnStyle={"p-3 md:w-[300px] md:text-[20px] rounded-full text-primary hover:bg-primary hover:text-white font-[500] ease-in duration-300 border-[0.9px] border-primary"}
                            onBtnClick={()=> navigate('/register')}
                            type={'outline'}
                        />
                    </div>
                    <div className='flex-[3] md:mb-0 mb-2'>
                        <img src="https://trustwallet.com/_next/static/media/raw.d927cfe4.svg" className='md:absolute md:bottom-0 md:bg-transparent bg-gray-300 rounded-[20px] md:w-[500px] right-0' alt="" />
                    </div>
                </div>
            </section>



            <section className='md:p-10 md:space-y-6 space-y-4 p-5 bg-gradient-to-br from-yellow-200 to-green-400'>
                <div className='text-center'>
                    <div className='md:text-[60px] text-black text-[30px] font-[700]'>Stay private and secure</div>
                    <p className="md:text-[20px] m-auto md:w-[800px] text-[13px] text-back font-[500]">Rest easy knowing that our privacy and security measures keep you in control of your data and digital assets, while also keeping them safe.</p>
                </div>


                <div className='md:w-[95%] bg-white m-auto overflow-hidden flex md:flex-row flex-col-reverse relative items-center rounded-[50px] md:p-10 md:py-10 p-8'>
                    <div className='md:space-y-4 space-y-2 flex-[2.5]'>
                        <div className='md:text-[40px] text-[25px] md:leading-[50px] md:font-[600] font-[700]'>True ownership of your crypto assets</div>
                        <div className='md:text-[16px] text-[12px]'>{"We secure your wallet, but don't control or have access to your private keys or secret phrase - only you do."}</div>
                        <Button
                            text={"Get Started"}
                            btnStyle={"p-3 md:w-[200px] bg-primary md:text-[20px] text-white rounded-full hover:bg-transparent w-full hover:text-primary font-[500] ease-in duration-300 border-[0.9px] border-primary"}
                            onBtnClick={()=> navigate('/register')}
                            type={'outline'}
                        />
                    </div>
                    <div className='flex-[3] flex justify-center'>
                        <img src="https://trustwallet.com/_next/static/media/raw.0acff7b3.svg" className=' md:w-[400px]' alt="" />
                    </div>
                </div>

                <div className='md:w-[95%] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto gap-4 md:py-10 md:p-10'>
                    <div className='bg-white flex flex-col justify-between md:p-10 p-8 md:space-y-10 space-y-5 rounded-[40px]'>
                        <div className='md:text-[25px] md:leading-[30px] leading-[30px] md:font-[600] font-[700] text-[25px]'>Added security with encryption</div>
                        <img src="https://trustwallet.com/_next/static/media/raw.323e03ee.svg" className='md:w-[150px] m-auto' alt="" />
                        <div className='md:text-[16px] text-[13px]'>Use our Encrypted Cloud Backup for increased wallet security.</div>
                    </div>
                    <div className='bg-white flex flex-col justify-between md:p-10 p-8 md:space-y-10 space-y-5 rounded-[40px]'>
                        <div className='md:text-[25px] leading-[30px] md:font-[600] font-[700] text-[25px]'>Zero personal tracking</div>
                        <img src="https://trustwallet.com/_next/static/media/raw.16e2b8fb.svg" className='md:w-[130px] m-auto' alt="" />
                        <div className='md:text-[16px] text-[13px]'>{"We don't track any personal information, including your IP address or balances."}</div>
                    </div>
                    <div className='bg-white flex flex-col justify-between md:p-10 p-8 md:space-y-10 space-y-5 rounded-[40px]'>
                        <div className='md:text-[25px] leading-[30px] md:font-[600] font-[700] text-[25px]'>Proactive alerts for risky transactions</div>
                        <img src="https://trustwallet.com/_next/static/media/raw.f17c90c5.svg" className='md:w-[130px] m-auto' alt="" />
                        <div className='md:text-[16px] text-[13px]'>Stay safe with alerts for risky address and dApp connections.</div>
                    </div>
                </div>

                <Button 
                    text={"Learn more about privacy & security"}
                    btnStyle={'p-3 md:w-[500px] ease-in duration-300 rounded-[40px] border-[0.9px] m-auto hover:bg-black hover:text-white'}
                    onBtnClick={()=> navigate('/register')}
                    type={'outline'}
                />
            </section>
        </div>
    </div>
  )
}

export default Platforms