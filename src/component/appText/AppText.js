import React from 'react'
import google from '../../assets/google-app.webp'
import store from '../../assets/app-store.webp'

function AppappText() {
  return (

    <div className='px-6 sm:px-0'>
      <h1 className="font-poppins font-bold sm:text-[1.75rem] text-lg
                                 leading-[3.8rem]    bg-gradient-to-b from-[#D463A4] to-[#BB58A9]
                          text-transparent bg-clip-text text-center">Download our app</h1>
      <div className='flex justify-center md:mt-2'>
        <div className='bg-pink-500 w-12 h-1 rounded-full'></div>
      </div>
      <p className=" text-base font-poppins  text-center font-normal xl:mt-9 mt-6 w-full max-w-sm mx-auto  tracking-wide md:leading-10 leading-8">Discover exclusive deals and discounts with
        our mobile experience.</p>
      <div className='flex gap-[0.6rem] flex-wrap xl:mt-5 m-0 justify-center'>
        <img src={store} alt="Store" />
        <img src={google} alt="google" />
      </div>
    </div>

  )
}

export default AppappText