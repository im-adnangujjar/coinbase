import React from "react";
import neie from "../../assets/neie.webp";
import Button from "../button/Button";

function Experience() {
  return (
    <div className=" block md:flex  lg:block  justify-center items-center">
      <div className="grid grid-col-1 gap-9 items-center lg:grid-cols-2 max-w-2xl lg:max-w-5xl xl:max-w-none ml-10 mr-10 xl:ml-[13.6rem] xl:mr-[10.7rem]">
        <div >
          <h1 className="font-bold text-[1.75rem] leading-[4.1rem] font-poppins bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent bg-clip-text">
            Great experience<br />
            with CoinBase
          </h1>
          <div className="w-10 h-1 bg-pink-500 rounded-lg"></div>
          <p className="font-normal font-poppins text-base leading-10 my-9">
            CoinBase is an online site and a p2admin platform that allows users
            to buy, sell and/ or exchange digital and fiat assets safely. Owned
            and managed by CoinBase Business Services established and
            Incoperated in Nigeria.
          </p>
          <div className="flex justify-start">
            <Button text="DISCOVER" />
          </div>
        </div>
        <div>
          <img src={neie} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
