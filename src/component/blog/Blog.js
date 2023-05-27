import React from 'react'
import Button from '../button/Button'

function Blog() {
    return (
        <>
            <div className='flex text-center flex-col  justify-center mt-10 md:mt-36'>
                <h4 className="font-poppins font-bold text-[1.75rem] leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
   text-transparent bg-clip-text">
                    Our blog
                </h4>
                <div className='flex justify-center mt-[1.10rem]'>
                    <div className='w-10 h-1 rounded-full bg-pink-500'></div>
                </div>
            </div>

            <div className='flex text-center justify-center mt-10 mb-[3.1rem]'>
                <h4 className="font-poppins text-base font-normal leading-14 mx-6 text-gray-700">
                    Get to know the latest stuff via our blog post.
                </h4>
            </div>
            <div className='flex items-center justify-center mx-6 xl:mx-0'>
                <div className='bg-white w-[370px] h-[290px] lg:block hidden border border-[#888888] pt-12 pb-7 pl-14 -mr-16 rounded-2xl'>
                    <div className='flex flex-row  gap-2  text-sm text-gray-500'>
                        <p className='text-[10px] font-normal font-poppins'>01 FEB, 2019</p>
                        <div className='border-l-2 h-5 border-gray-400 border '></div>
                        <p className=' text-[10px] font-normal font-poppins'>TECHNOLOGY</p>
                    </div>
                    <h1 className="text-[#888888] mt-[1.1rem] mb-3 text-left text-xl font-bold">
                        HOW TO SELL YOUR ITUNES GIFTCARD WITH.</h1>
                    <p className='text-[#888888] text-[10px] max-w-[246px] leading-[1.1rem] font-normal'>Lorem ipsum dolor sit amet, magna habemus
                        ius ad, qui minimum voluptaria in. Ad mei modus
                        quodsi complectitur, postea...</p>
                    <button className="w-36 h-11 mt-4 text-white font-poppins bg-gray-500 justify-end font-bold cursor-pointer rounded-full text-sm" >
                        READ MORE</button>
                </div>
                <div className='bg-white z-40 pt-11 pl-6 sm:pl-14 pb-10 w-[465px] border border-[#888888] rounded-2xl'>
                    <div className='flex flex-row  sm:gap-2 font-norml text-[10px] gap-1 sm:text-sm'>
                        <p className='text-[10px] font-normal font-poppins'>19 JUNE, 2019</p>
                        <div className='border-l-2 h-5 border-black '></div>
                        <p className='text-[10px] font-normal font-poppins'>BUSINESS</p>
                    </div>
                    <div className='w-full max-w-[308px]'>
                        <h1 className=' text-2xl font-bold mt-[1.4rem] bg-gradient-to-b from-[#C35B95] to-[#B254AB]
               text-transparent bg-clip-text mb-4'
                            style={{
                                background: `linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                            }}>ETH TO NAIRA EXCHANGE
                            RATE IS NOW #400 PER...</h1>
                        <p className='font-normal text-xs leading-7'>Lorem ipsum dolor sit amet, magna habemus
                            ius ad, qui minimum voluptaria in. Ad mei modus
                            quodsi complectitur, postea...</p>
                    </div>

                    <div className='flex justify-start mt-6'>
                        <Button text='READ MORE' />
                    </div>
                </div>
                <div className=' bg-white border border-[#888888] lg:block hidden  h-[290px] pt-12 pb-7 pl-14 -ml-16 w-[370px] rounded-2xl'>
                    <div className='flex flex-row  gap-2  text-sm text-gray-500'>
                        <p className='text-[10px] font-normal font-poppins'>01 FEB, 2019</p>
                        <div className='border-l-2 h-5 border-gray-400 border '></div>
                        <p className=' text-[10px] font-normal font-poppins'>TECHNOLOGY</p>
                    </div>
                    <h1 className="text-[#888888] mt-[1.1rem] text-xl mb-3 mr-5 text-left font-bold">
                        EXCHANGE 5 PRODUCTS &
                        GET 1 FREE PRODUCT.</h1>
                    <p className='text-[#888888] text-[10px] max-w-[246px] leading-[1.1rem] font-normal'>Lorem ipsum dolor sit amet, magna habemus
                        ius ad, qui minimum voluptaria in. Ad mei modus
                        quodsi complectitur, postea...</p>
                    <button className="w-36 h-11 mt-4 text-white font-poppins bg-gray-500 justify-end font-bold cursor-pointer rounded-full text-sm" >
                        READ MORE</button>
                </div>
            </div>

        </>
    )
}

export default Blog