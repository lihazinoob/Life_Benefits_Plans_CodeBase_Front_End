import React from "react";
import image from "../../assets/image.png"
const ExpertOpinion = () => {
  return (
    <div className="w-full py-4 md:py-0 mt-16 md:pt-6 px-4 md:px-8 bg-[#F6F8F7] rounded-lg flex flex-col md:flex-row items-center md:items-start gap-16">
      {/* Image Section */}
      <div className="w-48 h-48 md:w-72 md:h-72 flex-shrink-0 hidden md:block">
        <img
          src={image}
          alt="Expert Support"
          className="w-full h-full rounded-lg object-cover "
        />
      </div>

      {/* Text and Call Section */}
      <div className="text-center flex-1">
        <h2 className="text-4xl font-semibold text-gray-900 text-center  tracking-wide">
          Prefer to speak with an expert?
        </h2>
        <p className="text-gray-600 mt-4 text-center text-xl">
          Speak with a licensed agent and get expert advice<br/> on choosing a plan
          that’s right for you.
        </p>

        {/* Call Button */}
        <div className="mt-8 items-center text-center">
          <a href="tel:8337150369">
            <button className="bg-[#4970FA] text-white py-2 px-6 rounded-lg text-lg gap-2 shadow-md  transition">
              <div className="flex flex-row items-center justify-center gap-4 p-2">
                <img
                  decoding="async"
                  alt="Ringing phone icon loading="
                  src="https://a-us.storyblok.com/f/1016477/33x37/8591b07629/white-phone-icon-33.gif"
                  width="33px"
                  height="33px"
                ></img>
                (833)-715-0369
              </div>
            </button>
          </a>
          <div className="flex flex-row items-center justify-center mt-6 gap-2">
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

            <p className="text-gray-500 text-sm ">
              Call for free live assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertOpinion;
