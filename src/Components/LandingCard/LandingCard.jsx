import React from "react";
import { Link } from "react-router-dom";
const LandingCard = () => {
  return (
    <div className="w-full mt-16 py-6 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Card */}
        <div className="bg-[#F6F8F7] flex flex-col justify-center items-center p-2 rounded-lg shadow-md h-80">
          <h2 className="text-3xl  font-semibold text-center">
            Compare life insurance quotes
          </h2>
          <p className="text-sm text-gray-600 mt-6 text-center">
            NO OBLIGATION{" "}
            <span className="text-blue-600 font-semibold text-xl">
              TO ENROLL
            </span>
          </p>

          <Link to='/form' className="bg-[#4970FA] text-white py-4 px-4 rounded-md mt-4 "
            onClick={()=> window.scrollTo(0,0)}>
            START MY QUOTE
          </Link>
        </div>

        {/* Second Card */}
        <div className="bg-[#F6F8F7] flex flex-col justify-center items-center p-6 rounded-lg shadow-md h-80">
          <h2 className="text-3xl font-semibold text-center">
            Or give us a call
          </h2>
          <p className="text-sm text-gray-600 mt-6 mb-2 text-center">
            <span className="text-[#4970FA] font-semibold text-xl">
              THE EASIER, FASTER
            </span>{" "}
            WAY TO GET QUOTES
          </p>
          <a href="tel:8336303733">
            <button className="bg-[#4970FA] text-white  px-2 rounded-lg text-lg gap-2 shadow-md  transition">
              <div className="flex flex-row items-center justify-center gap-4 p-2">
                <img
                  decoding="async"
                  alt="Ringing phone icon loading="
                  src="https://a-us.storyblok.com/f/1016477/33x37/8591b07629/white-phone-icon-33.gif"
                  width="33px"
                  height="33px"
                ></img>
                (833)-630-3733
              </div>
            </button>
          </a>
          <p className="text-sm text-gray-600 mt-2 flex items-center justify-center gap-1">
          <img
              loading="lazy"
              decoding="async"
              className="pulse-icon svelte-rbq5f4 "
              alt="Green pulsing icon"
              src="https://a-us.storyblok.com/f/1016477/16x16/d82135e00f/pulsing-16.gif"
              // width="16"
              // height="16"
              // style="margin-right: 4px; top: 2px"
            />
            
             Call for free live
            assistance
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
