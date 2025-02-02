import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-8 text-gray-700 text-sm">
      <div className=" mx-auto flex flex-col  ">
        {/* Logo Section */}
        <div className="flex flex-row items-center justify-between gap-2 mb-4">
          <span className="sm:text-lg text-sm  font-bold text-[#0089C8] cursor-pointer">
            LifeBenefitsPlus.com
          </span>
          <img
            className="secondary_image svelte-xo7gnr "
            src="https://a-us.storyblok.com/f/1016477/87x41/5d4ac39a06/bbb-logo.svg"
            alt=""
            loading="lazy"
          />
        </div>
        <hr className="my-1 w-full border-t border-black" />

        <div className="my-6">
          {/* Description */}
          <p className="text-gray-600  mb-4">
            Life Insurance Pros is not an insurance or operating company but
            connects individuals with insurance providers. Products and services
            are provided exclusively by the providers. Descriptions are for
            informational purposes only and subject to change. Insurance plans
            may not be available in all states. For a complete description,
            please call{" "}
            <a
              href="tel:8778410987"
              className="text-[#0089C8] underline cursor-pointer"
            >
              (877) 841-0987
            </a>
            (TTY Users: 711) to determine eligibility and to request a copy of
            the applicable policy.
          </p>

          {/* Legal and Contact Info */}
          <p className="text-gray-600 mb-2">
            Life Insurance Pros is not affiliated with or endorsed by the United
            States government or the federal Medicare program. By using this
            site, you acknowledge that you have read and agree to the{" "}
            <Link to="/terms-of-use" className="text-[#0089C8] underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <a href="#" className="text-[#0089C8] underline">
              Privacy Policy
            </a>
            .
          </p>

          <p className="text-gray-600 mb-4">
            We are committed to protecting your privacy. If you do not want to
            share your information, click on{" "}
            <a href="#" className="text-[#0089C8] underline">
               Do Not Sell My Personal Information
            </a>
            .
          </p>
          <hr className="my-1 w-full border-t border-black" />
          {/* Copyright and Contact */}
          <p className="text-gray-500 my-6">
            Copyright &copy; 2025 lifebenefitsplus.com | All rights reserved. |{" "}
            <a href="#" className="text-[#0089C8] underline">
              Contact Us
            </a>
          </p>

          {/* Additional Note */}
          <p className="text-gray-500 text-xs mt-2">
            *Rate calculated for a 50-year-old woman from Washington state with
            a $6,000 policy. Actual rates may vary.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
