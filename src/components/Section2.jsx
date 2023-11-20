import React from "react";

const Section2 = () => {
  return (
    <div className="w-full h-full ">
      <img src="/Group2.png" alt="" className="my-10 mx-7 " />
      <div className="flex  mb-10 space-x-8 mx-7 ">
        <div className="relative">
          <img src="/Group2left.png" alt="" />
          <img
            src="/fingerprint.png"
            alt=""
            className="absolute top-6 left-[70%] w-40 h-40  sm:visible"
          />
        </div>
        <div className="">
          <img src="/Group2right.png" alt="" />{" "}
        </div>
      </div>
      <img src="/frame2.png" alt="" className="my-10" />
      <img src="/footer2.png" alt="" className="my-10" />
    </div>
  );
};

export default Section2;
