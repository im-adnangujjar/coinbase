import React from "react";
import wave from '../../assets/svg-icon/path-4.svg'

function MainComponent(props) {
  return (
    <div className="flex flex-col justify-center overflow-hidden lg:px-0"
    style={{background: `linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%)`}}>
      <div className=" grid grid-cols-1 lg:grid-cols-2  items-center my-auto">
        <div className="lg:order-first order-last ">{props.children}</div>
        <div className="mb-4 mt-[3.75rem] lg:mr-[5.94rem] mx-6  ">
          <img src={props.img} alt="image not found" />
        </div>
      </div>
      <img className="w-full" src={wave} alt="wave" />
    </div>
  );
}

export default MainComponent;
