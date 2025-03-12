import React from "react";

const CongoMessage = () => {
  return (
    <div className="w-full mt-16 py-6 px-4 md:px-8">
      <div className="font-bold text-center">
        Congratulations! We’ll get back to you soon! <br />
        If you would like to contact us immediately, click below.
      </div>

      <div className="text-center mt-6">
        <a href="tel:8337150369">
          <button className="bg-[#4970FA] text-white  px-2 rounded-lg text-lg gap-2 shadow-md  transition">
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
          Call for free live assistance
        </p>
      </div>
    </div>
  );
};

export default CongoMessage;
