import React from 'react'
import tree from '../../assets/tree.webp'


function OurHistory() {
    return (
        <div>
            <div className="pb-[7.8rem]">
                <h1 className="font-poppins font-bold text-3xl leading-[4rem] bg-gradient-to-b from-[#D664A4] to-[#B856A9]
           text-transparent bg-clip-text text-center">Our history</h1>
                <div className='flex justify-center mb-[5.4rem] '>
                    <div className='bg-pink-500 w-12 h-2 rounded-lg'>
                    </div>
                </div>
                <div className=" flex  justify-center flex-wrap lg:flex-nowrap text-[#333333] items-center lg:px-0 px-6 ">
                    <div className='flex flex-col  lg:w-[34%] text-end gap-5 sm:gap-16 lg:gap-56'>
                        <div className=" md:pr-[2.8rem] pr-0px ">
                            <h1 className='text-[#ed7fb2] text-[2rem] mb-4 text-left lg:text-right font-bold'>May 2010</h1>
                            <p className='font-normal font-poppins leading-[1.90rem] text-lg text-left lg:text-right'>
                                Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit,
                                at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
                        </div>
                        <div className="md:pr-[2.8rem] pr-[0px] ">
                            <h1 className='text-[#ed7fb2] text-[2rem] mb-4 text-left lg:text-right font-bold'>May 2019</h1>
                            <p className='font-normal font-poppins leading-[1.90rem] text-lg text-left lg:text-right'>
                                Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit,
                                at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
                        </div>
                    </div>
                    <div className='lg:block hidden w-[1.1rem]'>
                        <img src={tree} alt="tree" />
                    </div>
                    <div className="lg:w-1/3 lg:pl-[2.8rem] pl-0px lg:mt-0 sm:mt-14 mt-5  ">
                        <h1 className='text-[#ed7fb2] text-[2rem]  mb-4 font-bold'>May 2017</h1>
                        <p className='font-normal font-poppins leading-[1.90rem] text-lg'>
                            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit,
                            at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
                    </div>
                </div>
                <p className='text-center pt-[1.9rem] font-poppins font-bold text-xs' >TO BE COUNTINES…</p>
            </div>
        </div>
    )
}

export default OurHistory