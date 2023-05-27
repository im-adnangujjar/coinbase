import React from 'react'
import Button from '../button/Button'

function Meet() {
    return (
        <div className=' pb-[5.75rem] px-6'>
            <h1 className='text-center font-poppins font-bold bg-gradient-to-b from-[#D664A4] to-[#B856A9]
           text-transparent bg-clip-text text-[1.75rem] leading-[4rem]'>Meet the team</h1>
            <div className='flex justify-center mb-9'>
                <div className='bg-pink-500 w-12 h-2 rounded-lg'>
                </div>
            </div>
            <p className='font-normal font-poppins text-base leading-10 text-center mb-[3.75rem] mt-5'>Meet the team that  makes the process of this system fast and <br /> painless as possible to provide you with good result </p>
            <div className=" relative flex flex-wrap :w-1/3 mt-[3.75rem]">
                <div className="h-[185px]  w-[18.7rem] top-[20%] left-[13%]   z-10 bg-[#C4C4C4] shadow-lg  rounded-xl absolute hidden sm:block">
                </div>
                <div className="h-[14.6rem]  w-[18.7rem] top-[10%] left-[28%]  z-10 bg-[#C4C4C4]   shadow-lg    rounded-xl   absolute hidden sm:block">
                </div>
                <div className="h-[11.6rem]  w-[18.7rem] top-[20%] right-[15%]  z-10 bg-[#C4C4C4] shadow-lg  rounded-xl absolute hidden sm:block">
                </div>
                <div className=" h-[14.6rem] w-[18.7rem] right-[28%] top-[10%]  z-10 bg-[#C4C4C4]  shadow-lg   rounded-xl  absolute hidden sm:block">
                </div>
                <div className="flex w-full justify-center items-center ">
                    <div className="h-[285px]  w-[18.7rem] z-20 bg-gradient-to-b from-[#f19aca] to-[#987fae]
                   text-transparent  rounded-xl">
                        <div className='flex flex-col justify-end h-full pl-4 pb-6'>
                            <h1 className='text-white'>CEO</h1>
                            <p className='text-white'>Amanda Roth</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center font-bold font-poppins leading-[4rem] text-[1.75rem] mt-20 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                                text-transparent bg-clip-text'>Subscribe our newsletter</h1>
            <div className='flex justify-center mb-9'>
                <div className='bg-pink-500 w-12 h-2 rounded-lg'>
                </div>
            </div>
            <p className='font-normal font-poppins text-base leading-10 text-center mt-9 '>Subscribe to our newsletter for daily/weekly <br />update of our products and services.</p>
            <div className=" w-full md:flex-row  flex  flex-col justify-center mt-11 items-center  gap-4 mb-6">
                <div className=' sm:w-96 w-[90%]  h-[56px] flex justify-center rounded-full p-[1px]'
                    style={{ background: `linear-gradient(180deg, #FD749B -12.41%, #281AC8 88.56%)` }}>
                    <input type="text" placeholder='Email' className='w-full  h-full text-black rounded-full font-normal text-sm py-1 px-3' />
                </div>
                <Button text='DISCOVER' />
            </div>

        </div>
    )
}

export default Meet