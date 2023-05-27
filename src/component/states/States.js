import React from "react";
import shape from "../../assets/svg-icon/path.svg";
import shape2 from "../../assets/svg-icon/path-1.svg"
import { ReactComponent as Eth } from '../../assets/svg-icon/eth.svg';
import { ReactComponent as Building } from '../../assets/svg-icon/bank-building.svg';
import { ReactComponent as Bitcoin } from '../../assets/svg-icon/bitcoin.svg';
import { ReactComponent as Transfer } from '../../assets/svg-icon/transfer.svg';
import { ReactComponent as Transfer1 } from '../../assets/svg-icon/transfer-2.svg';





function States() {
  return (
    <>
      <div className="bg-gradient-to-b  from-pink-500 via to-indigo-900 flex flex-col  justify-center overflow-hidden">
        <img className="" src={shape} alt="shap" />
        <div className="mx-5">
          <div className="w-full max-w-5xl mx-auto">
            <div className='shadow-xl rounded-[30px] mt-[3.3rem] mb-[2.2rem] pb-14 px-4 bg-white '>
              <div className='flex justify-around border-b-2 items-center h-[80px]  text-2xl font-bold leading-tight text-transparent  bg-gradient-to-b from-[#FD749B] to-[#B254AB] bg-clip-text'>
                <p className="hidden lg:block">OUR RATES</p>
                <p className='hidden lg:block'>OUR RESERVES</p>
                <p className='hidden lg:block'>LATEST EXCHANGES</p>
              </div>
              <div className='flex  justify-evenly gap-12 items-center flex-wrap  '>
                <div className='flex flex-col gap-5'>
                  <p className='block lg:hidden text-center border-b-2 pb-2 text-2xl font-bold leading-tight text-transparent h bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>OUR RATES</p>
                  <div className='flex gap-7 mt-6'>
                    <div className='flex items-center justify-center gap-3 h-fit'>
                      <Bitcoin />
                      <p className="font-normal font-poppins text-sm">BTC</p>
                    </div>
                    <div>
                      <p className="text-sm font-poppins">We Buy @ <b>  ₦350/$ </b></p>
                      <p className="text-sm font-poppins pt-4">We Sell <b>@ ₦370/$</b></p>
                    </div>
                  </div>
                  <div className='flex gap-7 justify-between'>
                    <div className='flex items-center justify-center gap-3 h-fit'>
                      <Eth />
                      <p className="font-normal font-poppins text-sm">ETH</p>
                    </div>
                    <div>
                      <p className="text-sm font-poppins">We Buy @ <b>₦350/$</b></p>
                      <p className="text-sm font-poppins pt-4">We Sell <b>@ ₦370/$ </b></p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-5 lg:mt-6'>
                  <p className='block lg:hidden text-center border-b-2 pb-2  text-2xl font-bold leading-tight text-transparent h bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>OUR RESERVES</p>
                  <div className='flex flex-col gap-5' >
                    <div className='flex flex-row gap-10 h-fit'>
                      <div className='flex items-center justify-center gap-2 h-fit '>
                        <Building />
                        <p className="font-normal font-poppins text-sm">Bank Transfer</p>
                      </div> <p className="font-normal font-poppins text-sm">NGN</p>  </div>
                    <p className='self-end text-sm font-poppins '> <b>#3452030300303.24/$ </b> </p>
                  </div>
                  <p className='flex gap-10 h-fit'>
                    <div className='flex items-center justify-center gap-2 h-fit' >
                      <Bitcoin />
                      <p className="font-normal font-poppins text-sm">Bitcoin</p>
                    </div>
                    <p className="text-sm font-poppins"><b>399.98</b>BTC</p>
                  </p>
                  <div className='flex  justify-between items-center h-fit'>
                    <div className='flex items-center justify-center gap-2 h-fit'>
                      <Eth />
                      <p className="font-normal font-poppins text-sm">Ethereum</p>
                    </div>
                    <p className="text-sm font-poppins"><b>1000.00</b> ETH</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2 lg:mb-6'>
                  <p className='block lg:hidden text-center border-b-2 pb-2 text-2xl font-bold leading-tight text-transparent h bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>LATEST EXCHANGES</p>
                  <button className='self-center w-[5.3rem] px-3 py-2 mt-3 text-[0.5rem] text-white rounded-md bg-gradient-to-br from-pink-500 to-indigo-900'>8 hours ago</button>
                  <div className='flex flex-col  '>
                    <div className='flex items-center gap-2 justify-start h-fit text-[14px]' >
                      <p>Bitcoin BTC</p><Transfer /> <p className="font-normal font-poppins text-sm">Bank</p>
                    </div>
                    <p>Transfer NGN</p>
                  </div>
                  <div className='py-2'>
                    <div className='flex items-center justify-start gap-2 border-b-2'>
                      <p className='whitespace-nowrap'><b>1.16</b> BTC</p>
                      <Transfer1 />
                      <p className='lg:whitespace-nowrap text-xs font-poppins'><b>696152299929.23</b>NGN</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-start text-[14px] justify-start h-fit '>
                    <div className='flex flex-row items-center justify-start h-fit gap-2'>
                      <p className="font-normal font-poppins text-sm">Amazon Card</p> <Transfer />  <p className="font-normal font-poppins text-sm">Bank</p>
                    </div>
                    <p className="font-normal font-poppins text-sm">Transfer NGN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img className="w-full" src={shape2} alt="shap" />
        </div>
      </div>

    </>
  );
}

export default States;




