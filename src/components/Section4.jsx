import React from "react";
//font-['fraunces']
const Section4 = () => {
  return (
    <div className="">
      <div className="w-full h-full  flex my-20">
        <div className="w-[50%]  font-['fraunces'] align-baseline">
          <p className="text-7xl ">
            <span className=" italic ">Get in</span>
            <span className="font-thin"> touch</span>
          </p>
          <p className=" text-xl font-['SF Pro Rounded'] my-2">
            We appreciate each customer and we are proud <br />
            that 60% of clients come back to work with us again.{" "}
          </p>
          <p className="align-baseline text-[#5739e7] mt-8 font-medium">
            +1 999 999 9999
          </p>
          <p className="text-[#5739e7] mt-2 font-medium">info@roini.com</p>
        </div>
        <div className="w-[50%]">
          <input
            type="text"
            placeholder="Your name"
            className="border border-[#5739e7] w-[80%] rounded-[20px] p-3"
          />
          <input
            type="email"
            placeholder="Your email"
            className="my-2 border border-[#573e97] w-[40%] rounded-[20px] p-3"
          />
          <input
            type="number"
            placeholder="Your phone #"
            className="ml-1 my-2 border border-[#573e97] w-[40%] rounded-[20px] p-3"
          />
          <input
            type="text"
            placeholder="Your company"
            className="mb-2 border border-[#573e97] w-[40%] rounded-[20px] p-3"
          />
          <input
            type="text"
            placeholder="Your position/role"
            className="ml-1 mb-2 border border-[#573e97] w-[40%] rounded-[20px] p-3"
          />
          <input
            type="text"
            placeholder="Drop us a line"
            className="border border-[#573e97] w-[80%] rounded-[20px] px-3 py-10"
          />
          <button
            className="hover:bg-violet-400
          mt-2 w-[80%] rounded-full p-4 bg-[#5739e7] text-white "
          >
            Send
          </button>
        </div>
      </div>
      <img src="/contactfooter.png" alt="" />
    </div>
  );
};

export default Section4;
//573e97,f8edff
