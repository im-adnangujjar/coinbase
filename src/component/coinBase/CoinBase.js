import React from "react";
import layer from "../../assets/layer-2.webp";
import Button from "../button/Button";

function CoinBase() {
  return (
    <div className=" block md:flex  lg:block  justify-center items-center">
      <div className="grid grid-col-1 gap-9 items-center lg:grid-cols-2 max-w-2xl lg:max-w-5xl xl:max-w-none ml-10 mr-10 xl:ml-[8.5rem] xl:mr-[9.7rem]">
        <div>
          <img src={layer} alt="img" />
        </div>
        <div >
          <h1 className="font-bold sm:text-[1.75rem] text-lg leading-[4rem] font-poppins bg-gradient-to-b from-[#C35B95] to-[#B254AB]
              text-transparent bg-clip-text">
            Welcome to CoinBase
          </h1>
          <div className="w-10 h-1 bg-pink-500 rounded-lg mt"></div>
          <p className="font-normal text-base leading-10 my-9">
            We have the best rates . Simply start your exchange right now. Sign
            up for our Affiliate program and earn commission from each exchange.
            The earnings are credited in your account instantly and can be
            withdrawn right away. Also note some exchange directions are hidden
            for unregistered user. To ensure to have access to all our exchange
            directions and benefits kindly sign up and verify your identity.
          </p>
          <div className="flex justify-start">
            <Button text="DISCOVER" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinBase;
