import React, { useState } from "react";
import { Link } from "react-router-dom";
import triangle from '../../assets/svg-icon/triangle.svg'
import { ReactComponent as Menu } from '../../assets/svg-icon/menu-icon.svg'
import { ReactComponent as Logo } from '../../assets/svg-icon/logo-1.svg'

function Header() {

  const [showTabs, setShowTabs] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);




  function dropDown() {
    setOpen(!open)
  }
  function toggleTabs() {
    setShowTabs(!showTabs);
  }


  const handleTabClick = (index) => {
    setActiveTab(index)
  };


  return (
    <div>
      <div className="flex justify-between items-center h-[8.4rem] xl:pl-[6.6rem]  xl:pr-[5.5rem]  pl-6 pr-6">
        <Link to='/'><div className=" flex items-end gap-2 cursor-pointer">
          <Logo />
        </div>
        </Link>
        <div className="md:flex items-center w-[75%] cursor-pointer justify-between gap-1 hidden">
          <ul className="flex list-none w-[50%] justify-between gap-1">
            <li className={`font-bold font-poppins text-sm py-1 ${activeTab === 0 ? 'border-b-4 border-pink-500 font-bold' : ''}`} onClick={() => handleTabClick(0)}><Link to='/'>Home</Link></li>
            <li className={`font-bold font-poppins text-sm py-1 ${activeTab === 1 ? 'border-b-4 border-pink-500 font-bold' : ''}`} onClick={() => handleTabClick(1)}><Link to='/about'>About us</Link></li>
            <li className={`font-bold font-poppins text-sm py-1 ${activeTab === 2 ? 'border-b-4 border-pink-500 font-bold' : ''}`} onClick={() => handleTabClick(2)}><Link to='/blog'>Blog</Link></li>
            <li className={`font-bold font-poppins text-sm py-1 ${activeTab === 3 ? 'border-b-4 border-pink-500 font-bold' : ''}`} onClick={() => handleTabClick(3)}><Link to='/contact'>Contact us</Link></li>
          </ul>
          <div className="flex items-center gap-8">
            <div onClick={dropDown} className="flex items-center gap-2">
              <button
                data-dropdown-toggle="dropdownOffset"
                data-dropdown-offset-distance="10" data-dropdown-offset-skidding="100"
                data-dropdown-placement="right" className="text-[#333333] text-[14px]  max-sm:hidden 
            focus:ring-blue-300 font-bold
          text-md  text-center inline-flex items-center "
                type="button">
                Sell Bitcoin/ Giftcard
              </button>
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.82624 5.12603C4.42928 5.70824 3.57076 5.70824 3.17379 5.12603L0.744683 1.56334C0.292087 0.899528 0.76749 0 1.57091 0H6.42912C7.23254 0 7.70795 0.899529 7.25535 1.56334L4.82624 5.12603Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <div className={`ml-[9.5rem] mt-[3.4rem] absolute ${open ? 'block' : 'hidden'}`}>
              <img src={triangle} alt='arrow' />
            </div>
            <div id="dropdownOffset" class={`z-10 mt-[8.1rem] ml-[8.7rem] border-[1px] border-[#E0E0E0] absolute  opacity-80 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-white-700  ${open ? 'block' : 'hidden'}   `}>

              <ul className=" text-sm  text-black dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li>
                  <a href="#" className="block pl-3 py-2 text-[#333333] text-xs leading-[1.1rem] ">Sell Bitcoin</a>
                </li>
                <li>
                  <a href="#" className="block pl-3 py-[0.40rem]  font-normal text-xs text-[#FFFFFF] text-[12px] rounded-br-lg rounded-bl-lg   " style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>Sell Giftcard</a>
                </li>
              </ul>
            </div>
            <div className="py-[1.1rem] px-[3.5rem] rounded-full text-white text-sm font-poppins font-bold"
              style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>LOGIN</div>
          </div>
        </div>
        <div onClick={toggleTabs} className='block md:hidden cursor-pointer' >
          <Menu />
        </div>
      </div>
      {showTabs ? (
        <div className="flex items-center w-full justify-center md:hidden">
          <ul className="flex flex-col w-full list-none gap-4 pb-3">
            <div className="flex justify-center">
              <li className={`font-bold font-poppins text-sm py-1 ${activeTab === 0 ? 'border-b-4 border-pink-500 font-bold' : ''}`} onClick={() => handleTabClick(0)}><Link to='/'>Home</Link></li>
            </div>
            <div className="flex justify-center">
              <li className={`font-bold font-poppins text-sm py-1 ${activeTab === 1 ? 'border-b-4 border-pink-500 font-bold' : ''}`} onClick={() => handleTabClick(1)}><Link to='/about'>About us</Link></li>
            </div>
            <div className="flex justify-center">
              <li className={`font-bold font-poppins text-sm py-1 ${activeTab === 2 ? 'border-b-4 border-pink-500 font-bold' : ''}`} onClick={() => handleTabClick(2)}><Link to='/blog'>Blog</Link></li>
            </div>
            <div className="flex justify-center">
              <li className={`font-bold font-poppins text-sm py-1 ${activeTab === 3 ? 'border-b-4 border-pink-500 font-bold' : ''}`} onClick={() => handleTabClick(3)}><Link to='/contact'>Contact us</Link></li>

            </div>

            <li>
              <div className="flex items-center gap-2">
                <div className="flex justify-center w-full">
                  <div onClick={dropDown} className="flex items-center gap-2">
                    <button
                      data-dropdown-toggle="dropdownOffset"
                      data-dropdown-offset-distance="10" data-dropdown-offset-skidding="100"
                      data-dropdown-placement="right" className="text-[#333333] text-[14px]  
            focus:ring-blue-300 font-bold
          text-md  text-center inline-flex items-center "
                      type="button">Sell Bitcoin/ Giftcard
                    </button>
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.82624 5.12603C4.42928 5.70824 3.57076 5.70824 3.17379 5.12603L0.744683 1.56334C0.292087 0.899528 0.76749 0 1.57091 0H6.42912C7.23254 0 7.70795 0.899529 7.25535 1.56334L4.82624 5.12603Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                  <div className={`ml-[9rem] mt-10 absolute ${open ? 'block' : 'hidden'}`}>
                    <img src={triangle} alt='arrow' />
                  </div>
                  <div id="dropdownOffset" class={`z-10 ml-[14rem] mt-12 border-[1px] border-[#E0E0E0] absolute opacity-80 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-white-700  ${open ? 'block' : 'hidden'}   `}>
                    <ul className=" text-sm  text-black dark:text-gray-200" aria-labelledby="dropdownDefault">
                      <li>
                        <a href="#" className="block px-4 py-3 text-[#333333] text-xs ">Sell Bitcoin</a>
                      </li>
                      <li>
                        <a href="#" className="block pl-4 py-3  font-normal text-sm text-[#FFFFFF] text-[12px] rounded-bl-lg rounded-br-lg  " style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>Sell Giftcard</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex justify-center w-full"><div className="py-[1.1rem] px-[3.5rem] rounded-full text-white text-sm font-poppins font-bold"
              style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>LOGIN</div></li>
          </ul>
        </div>
      )
        : null
      }
    </div >
  );
}

export default Header;