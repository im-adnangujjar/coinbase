import React from 'react'
import { ReactComponent as Bitcoin } from '../../assets/svg-icon/bitcoin.svg'
import { ReactComponent as Gift } from '../../assets/svg-icon/gift.svg'
import bgimage from '../../assets/bgimage-3.webp'

function Trad() {
    return (

        <div className='bg-center mt-16 flex justify-center items-center '
        style={{ height: '550px',  backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}>
            <div className=' bg-white  sm:mt-32 lg:w-[980px] lg:h-[504px] md:w-[700px] md:h-[450px]  sm:w-[500px] sm:h-[350px] w-[300px] h-[370px] shadow-lg rounded-2xl  '>
                <div className='flex text-center justify-center mt-10'>
                    <h4 className="font-poppins font-bold sm:text-[1.75rem] text-lg
             leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
               text-transparent bg-clip-text">
                        Trade from anywhere
                    </h4>
                </div>
                <div className='flex justify-center mt-[1.10rem]'><div className='w-10 h-1 bg-pink-500 rounded-full'></div></div>
                <div className='sm:flex sm:flex-row sm:justify-center   sm:mt-16 sm:align-baseline gap-7 sm:gap-14 flex flex-col justify-center items-center mt-5'>

                    <div className='border-fuchsia-800 border  rounded-xl md:w-[262px] md:h-[226px]  sm:w-[160px] sm:h-[150px]    w-[140px] h-[100px] gap-1 flex flex-col justify-center text-center items-center sm:gap-8'>
                        <Bitcoin />
                        <p className='font-bold text-md'>Bitcoin</p>
                    </div>
                    <div className='border-fuchsia-800 border  rounded-xl md:w-[262px] md:h-[226px]  sm:w-[160px] sm:h-[150px] w-[140px] h-[100px]  gap-1 flex flex-col justify-center text-center items-center sm:gap-8'>
                        <Gift />
                        <p className='font-bold text-md'>Gift Cards</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trad