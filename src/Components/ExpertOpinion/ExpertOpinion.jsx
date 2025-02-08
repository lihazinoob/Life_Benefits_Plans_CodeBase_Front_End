import React from "react";

const ExpertOpinion = () => {
  return (
    <div className="w-full mt-16 py-6 px-4 md:px-8 bg-[#F6F8F7] rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
      {/* Image Section */}
      <div className="w-32 md:w-48 flex-shrink-0">
        <img
          src="/path-to-your-image.jpg"
          alt="Expert Support"
          className="w-full rounded-lg object-cover hidden md:block"
        />
      </div>

      {/* Text and Call Section */}
      <div className="text-center md:text-left flex-1">
        <h2 className="text-4xl font-semibold text-gray-900 text-center  tracking-wide">
          Prefer to speak with an expert?
        </h2>
        <p className="text-gray-600 mt-4 text-center text-xl">
          Speak with a licensed agent and get expert advice on choosing a plan
          that’s right for you.
        </p>

        {/* Call Button */}
        <div className="mt-8 items-center text-center">
          <button className="bg-[#27B5CE] text-white py-2 px-6 rounded-lg text-lg gap-2 shadow-md  transition">
            <div className="flex flex-row items-center justify-center gap-4 p-2">
              <img
                decoding="async"
                alt="Ringing phone icon loading="
                src="https://a-us.storyblok.com/f/1016477/33x37/8591b07629/white-phone-icon-33.gif"
                width="33px"
                height="33px"
              ></img>
              <span>(877) 841-0987</span>
            </div>
          </button>
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
