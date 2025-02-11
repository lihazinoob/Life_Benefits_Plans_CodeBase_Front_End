import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CircleCheck } from "lucide-react";
const Option = () => {
  const [zip, setZip] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [stateval, setStateVal] = useState("");

  const navigate = useNavigate();

  const validateZip = async (zipCode) => {
    if (zipCode.length !== 5 || isNaN(zipCode)) {
      setIsValid(false);
      setErrorMessage("Invalid ZIP");
      return;
    }

    try {
      const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
      if (!response.ok) {
        throw new Error("Invalid ZIP");
      }
      setIsValid(true);
      setErrorMessage("");

      const data = await response.json();
      console.log("API Response:", data);

      // Save state variables correctly
      setCountry(data.country);
      setCity(data.places[0]["place name"]);
      setStateVal(data.places[0]["state"]);

      // Save to local storage
      localStorage.setItem("selectedZIP", zipCode);
      localStorage.setItem("selectedCountry", data.country);
      localStorage.setItem("selectedCity", data.places[0]["place name"]);
      localStorage.setItem("selectedState", data.places[0]["state"]);
    } catch (error) {
      setIsValid(false);
      setErrorMessage("Invalid ZIP");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setZip(value);
    validateZip(value); // Call validateZip with the latest input
  };

  const handleSubmit = () => {
    // Ensure that state values are set before navigating
    if (!isValid || !country || !city || !stateval) {
      setErrorMessage("Please enter a valid ZIP code before proceeding.");
      return;
    }

    navigate("/form", {
      state: {
        selectedState: stateval,
        selectedCountry: country,
        selectedCity: city,
        selectedZIP: zip,
      },
    });
  };

  return (
    <div className="w-full mt-16 py-6 px-4 md:px-8 bg-[#F6F8F7] rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold tracking-widest">
          Life Insurance Options 2025
        </h1>
        <div className="mt-4 font-semibold text-xl">
          Quotes starting at <span className="text-[#4970FA] ">$15/month*</span>
        </div>

        <div className="flex flex-row gap-4 mt-4 justify-center items-center">
          <div className="relative">
            <input
              type="text"
              value={zip}
              onChange={handleChange}
              placeholder="Enter ZIP code"
              className={`p-3 rounded-md border-2 text-lg outline-none text-center items-center ${
                isValid === null
                  ? "border-gray-300"
                  : isValid
                  ? "border-green-500"
                  : "border-red-500"
              }`}
            />
            {isValid !== null && (
              <span className="absolute right-3 top-3">
                {isValid ? (
                  <CheckCircle className="text-green-500" size={24} />
                ) : (
                  <XCircle className="text-red-500" size={24} />
                )}
              </span>
            )}
            {errorMessage && (
              <p className="text-red-500 text-sm mt-1 text-center">
                {errorMessage}
              </p>
            )}
          </div>

          <button
            className="bg-blue-600 text-white px-4 py-3 rounded-md text-lg hover:bg-blue-700 transition"
            onClick={handleSubmit}
          >
            Start My Quote
          </button>
        </div>
        {/* TAGLINE */}
        <div className="mt-8 text-center text-sm">
          <div className="flex flex-row justify-center items-center gap-1">
            <CircleCheck className="text-[#4970FA] w-5 h-5" />
            <p>We've helped 4,779 people from C this month.</p>
          </div>
          <div>
            <span className="font-bold">With 100 partners,</span> we may offer
            plans from leading brands like those below and more.
          </div>
        </div>

        {/* Buttons and Images */}

        <div className="flex flex-row justify-center items-center mt-8 gap-2">
          <button className="border-2 rounded-lg p-2">
            <img
              src="https://a-us.storyblok.com/f/1016477/295x67/c937358aa4/mutual-of-omaha.svg/m/132x30"
              alt="logo"
              loading="lazy"
              width="132"
              height="30"
            />
          </button>
          <button className="border-2 rounded-lg py-1.5">
            <img
              src="https://a-us.storyblok.com/f/1016477/51x51/3c0acfce75/new-york-life-desktop.svg/m/140x36"
              alt="logo"
              loading="lazy"
              width="140"
              height="36"
            />
          </button>
          <button className="border-2 rounded-lg px-2">
            <img
              src="https://a-us.storyblok.com/f/1016477/136x25/24c00a3265/pacific-life-desktop.svg/m/120x48"
              alt="logo"
              loading="lazy"
              width="120"
              height="48"
            />
          </button>
          <button className="border-2 rounded-lg px-2 py-3">
            <img
              src="https://a-us.storyblok.com/f/1016477/137x29/6f1bdea71d/prudential-desktop.svg/m/131x24"
              alt="logo"
              loading="lazy"
              width="131"
              height="24"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Option;
