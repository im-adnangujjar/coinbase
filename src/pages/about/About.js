import React from 'react'
import MainComponent from '../../component/mainComponent/MainComponent'
import services from '../../assets/services.webp'
import layer from '../../assets/layer-2.webp'
import { ReactComponent as Support } from '../../assets/svg-icon/support.svg'
import { ReactComponent as Customer } from '../../assets/svg-icon/customer.svg'
import { ReactComponent as Quality } from '../../assets/svg-icon/Quality.svg'
import { ReactComponent as Medal } from '../../assets/svg-icon/medal.svg'
import OurHistory from '../../component/ourHistory/OurHistory'
import Meet from '../../component/meet/Meet'


function About() {
    return (
        <div >
            <MainComponent img={services}>
                <div className="text-center mx-6 mt-8 xl:mt-0  xl:ml-[11.4rem] lg:ml-[8rem] lg:text-start">
                    <h2 className=' font-poppins font-normal text-xs text-white mb-4'>HOME/ABOUT US</h2>

                    <p className="xl:text-[2.5rem] text-3xl font-poppins font-bold leading-[3.7rem] text-white">
                        Great service,
                        Professional support
                    </p>
                    <p className="text-lg font-normal font-Poppins  text-white mt-[21px] mb-[1.9rem] max-w-[460px] lg:mx-0 mx-auto ">
                        CoinBase is a platform for trading your bitcoin and
                        giftcard at the best rate, why not give us a trial.
                    </p>
                </div>
            </MainComponent>
            <div>
                <p className='bg-gradient-to-b leading-10 mt-6 mx-5 sm:max-w-lg sm:mx-auto from-[#FD749B] to-[#281AC8] text-transparent 
        bg-clip-text cursor-pointer font-bold text-lg text-center'
                >
                    “Morbi sagittis ultricies ex, a tempus lorem suscipit non.
                    Donec semper leo ut lobortis condimentum. Orci varius natoque penatibus et magnis”</p>
                <div className='flex justify-center items-center mt-[1.3rem] mb-5 '>
                    <div className='bg-pink-500 w-12 h-2 rounded-lg'>
                    </div>
                </div>
                <p className='font-poppins font-normal  text-sm text-center'>Ramon Ridwan • CEO CoinBase</p>
            </div>
            <div className='xl:mx-0 mx-6'>
                <div className="border-fuchsia-400 w-full max-w-[66rem] mx-auto mt-[4.1rem] mb-[6.7rem] py-9  px-4 border-2  rounded-3xl">
                    <div className="w-full max-w-lg mx-auto ">
                        <div className='flex justify-center'>
                            <img className=" " src={layer} alt="hero" />
                        </div>
                        <div className="">
                            <h1 className="font-poppins font-bold text-[1.75rem]
                  bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                  text-transparent bg-clip-text text-center mt-8">About CoinBase</h1>
                            <div className='flex justify-center mb-9 '>
                                <div className='bg-pink-500 w-12 h-2 rounded-lg'>
                                </div>
                            </div>
                            <p className="mb-9  text-base text-center leading-10">CoinBase is an online site and a p2admin platform that
                                allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
                            </p>
                            <div className='flex justify-center mb-5'>
                                <div className='flex gap-10'>
                                    <Support />
                                    <Quality />
                                    <Medal />
                                    <Customer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurHistory />
            <Meet />
        </div>
    )
}

export default About