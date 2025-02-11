import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full px-2 md:px-4 lg:px-8">
      <header className="flex justify-between items-center py-3 md:py-2 max-w-7xl mx-auto gap-0.5">
        {/* Left Section: Logo */}
        <div className="lg:text-2xl sm:text-xl text-sm  font-bold text-[#4970FA] flex items-center gap-1 md:gap-2">
          <Link to="/">Life Benefits Plus</Link>
          
        </div>

        {/* Right Section: Contact Info */}
        <div className="flex items-center gap-4 md:gap-2 text-right">
          {/* Hidden on small and medium screens */}
          <p className="text-black text-xl hidden md:block">
            Need a quote? <span className="hidden sm:inline font-bold">Call toll free:</span>
          </p>

          {/* Phone Number Section */}
          <div className="flex items-center  md:gap-1.5">
             {/* Using the given phone icon */}
             <div>
             <img loading="lazy" src="https://a-us.storyblok.com/f/1016477/100x100/801d22a11e/phone-ring-blue.gif" alt="Blue phone icon" width="40" height="40" className="svelte-atal1n"/>
             </div>
            <div className="flex flex-col">
              <span className=" text-sm lg:text-base font-bold text-black">1-844-998-0281</span>
              <span className="text-xs md:text-[10px] text-gray-500">Sun - Sat 8 AM - 8 PM EST</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
