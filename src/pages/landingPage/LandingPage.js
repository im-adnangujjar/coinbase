import React from "react";
import MainComponent from "../../component/mainComponent/MainComponent";
import image from "../../assets/image.webp";
import CoinBase from "../../component/coinBase/CoinBase";
import Experience from "../../component/experience/Experience";
import States from "../../component/states/States";
import Client from "../../component/client/Client";
import OurApp from "../../component/ourApp/OurApp";
import Blog from "../../component/blog/Blog";
import Trad from "../../component/trad/Trad";
import AppappText from "../../component/appText/AppText";

function LandingPage() {
  return (
    <div className="">
      <MainComponent img={image}>
        <div className="text-center mx-6 lg:text-start lg:ml-[8rem] mt-6 xl:ml-[11.4rem]">
          <p className="font-normal leading-[3.8rem] xl:text-[2.5rem] text-3xl font-sans text-white">
            We provide easy solution to exchange your{" "}
            <span className="xl:font-bold font-semibold font-poppins">
              Bitcoin/ GiftCard for money
            </span>
          </p>
          <p className="text-lg font-normal font-Poppins  text-white mt-[21px] mb-[1.9rem] max-w-[460px] mx-auto lg:mx-0 ">
            CoinBase is a platform for trading your bitcoin and giftcard at the
            best rate, why not give us a trial.
          </p>
          <div className="flex  justify-center lg:justify-start mb-10">
            <div className="px-8 py-4 bg-white rounded-full"><p className="bg-gradient-to-b from-[#C35B95] to-[#B254AB]
            text-transparent bg-clip-text text-sm font-bold font-poppins">Get Started</p></div>
          </div>
        </div>
      </MainComponent>
      <CoinBase />
      <States />
      <Experience />
      <Trad />
      <Blog />
      <Client />
      <AppappText />
      <OurApp />
    </div>
  );
}

export default LandingPage;
