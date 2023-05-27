// import React from "react";
// import MainComponent from "../../component/mainComponent/MainComponent";
// import Button from "../../component/button/Button";
// import Footer from "../../component/footer/Footer";
// import Header from "../../component/header/Header";
import React from "react";
import Header from "../../component/header/Header";
import img from "../../assets/suport.webp";
import MainComponent from "../../component/mainComponent/MainComponent";
import Button from "../../component/button/Button";
import call from "../../assets/svg-icon/phone-call.svg";
import mail from "../../assets/svg-icon/email.svg";
import pin from "../../assets/svg-icon/pin.svg";
import map from "../../assets/map.webp";


function Contact() {
  return (
    <div>
      <div className=" pb-[5.4rem]">
        <MainComponent img={img}>
          <div className="text-center mx-6 lg:text-start lg:ml-[8rem] xl:ml-[11.4rem]">
            <p className="xl:text-[2.5rem] text-[1.9rem] font-bold text-white">
              24/7 Customer support Including weekends.
            </p>
            <p className="text-lg font-normal font-Poppins  text-white mt-[21px] mb-[1.9rem] lg:mx-0 mx-auto  max-w-[441px]">
              We’re always there ti help regardless the number of queries at hand.
            </p>
          </div>
        </MainComponent>
        <div>
          <p className="font-normal font-poppins text-lg text-center p-6">
            Please note that all message will be replied within the next 12hours
          </p>
          <div className="mx-5">
            <div className="w-full max-w-[45.80rem] mx-auto ">
              <div class="flex gap-[2.30rem] flex-wrap  sm:flex-nowrap mt-12 mb-[1.90rem]">
                <input
                  class="border-2 p-5 w-full  border-[#D1D1D1]"
                  type="text"
                  placeholder="Name *"
                />
                <input
                  class="border-2 p-5 w-full border-[#D1D1D1]"
                  type="email"
                  placeholder="Email *"
                />
              </div>
              <textarea
                class="border-2 border-[#D1D1D1] pt-5 pl-5  w-full"
                id="w3review"
                name="w3review"
                rows="8"
                placeholder="   Your Comment"
              >
              </textarea>
              <div className=" flex justify-start mt-[3.1rem] mb-[5.85rem]">
                <Button text="PUBLISHD" />
              </div>
            </div>
          </div>
          <div className="mx-6 max-w-[45.80rem] sm:mx-auto h-[25rem]">
            <div className="h-96  sm:mx:4 mx:0 flex items-center justify-center bg-cover " style={{ backgroundImage: `url(${map})` }}>
              <div className="w-full max-w-[20.80rem] bg-white rounded-2xl pt-12 pb-[3.25rem] mx-2 px-4">
                <div className=" flex gap-4">
                  <img src={pin} alt="pin" />
                  <p>13 Sawyer Crescent Victoria Island Lagos Nigeria</p>
                </div>
                <div className=" flex gap-4 my-[0.85rem] ">
                  <img src={call} alt="call" />
                  <p>(+234) 137632128 </p>
                </div>
                <div className=" flex gap-4 ">
                  <img src={mail} alt="mail" />
                  <p>support@coinbase.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
