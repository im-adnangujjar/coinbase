import React from 'react'
import wave from '../../assets/svg-icon/wave-4.svg'
import device from '../../assets/device.webp'
import device1 from '../../assets/device-2.webp'
import Button from '../button/Button'




function OurApp() {
    return (
        <div>
            <div className='bg-gradient-to-b from-pink-500 via to-indigo-900 relative  h-[300px] md:h-[500px] w-[100%]'>
                <img className="w-full" src={wave} alt='wave' />
                <div className='md:w-60 sm:h-[50%] xl:top-[35%] md:top-[25%] top-[40%] h-[30%] w-[20%] right-[52%]  absolute'>
                    <img src={device} alt="Image 1" />
                </div>
                <div className='md:w-60 sm:h-[50%] xl:top-[35%] md:top-[25%] top-[40%]  h-[30%] w-[20%] left-[52%] absolute'>
                    <img src={device1} alt="Image 1" />
                </div>
            </div>
            <div className="flex justify-center  items-center"  >
                <div className="flex flex-col justify-evenly items-center text-center  max-w-7xl  pt-[5rem] sm:pt-[10rem]  xl:pt-[16rem] sm:pb-20 sm:px-10 px-6">
                    <h1 className="font-poppins font-bold sm:text-[1.75rem] text-lg
                          leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                          text-transparent bg-clip-text">Subscribe our newsletter
                    </h1>
                    <div className='flex justify-center mt-7'>
                        <div className='bg-pink-500 w-12 h-1 rounded-md'></div>
                    </div>
                    <p className="mt-4 text-base md:w-[60%] font-normal text-black  leading-10">Subscribe to our newsletter for daily/weekly update of our products and services.</p>
                    <div className=" w-full md:flex-row  flex  flex-col justify-center mt-11 items-center  gap-4 mb-6">
                        <div className='sm:w-96 w-[90%] h-[56px] flex justify-center rounded-full p-[1px]'
                            style={{ background: `linear-gradient(180deg, #FD749B -12.41%, #281AC8 88.56%)` }}>
                            <input type="text" placeholder='Email' className='w-full  h-full text-black rounded-full font-normal text-sm py-1 px-3' />
                        </div>
                        <Button text='DISCOVER' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurApp