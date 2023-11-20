import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#5739e7] font-['fraunces'] text-white flex gap-4 ">
      <div className=" ml-8 w-[50%] align-baseline">
        {" "}
        <h3 className="italic text-2xl">
          {" "}
          Reliable and <span className="font-extralight">secure pro</span>{" "}
          account
        </h3>{" "}
        <p>
          Your money and data are serious business that requires our full
          attention
        </p>
      </div>
      <div className="w-[50%]">right</div>
    </div>
  );
};

export default Footer;
