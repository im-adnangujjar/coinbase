import React from "react";

function Button(props) {
  return (
    <div className="px-[2.1rem] py-[1.1rem] text-white rounded-full  cursor-pointer"
      style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}
    >
      <p className="font-bold font-poppins text-sm m-0px leading-0px text-white">{props.text}</p>
    </div>
  );
}

export default Button;
