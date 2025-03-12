import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle, CircleCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Option = () => {
  const [zip, setZip] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [stateval, setStateVal] = useState("");

  const navigate = useNavigate();

  // Function to validate and fetch ZIP details
  const validateZip = async (zipCode) => {
    if (zipCode.length !== 5 || isNaN(zipCode)) {
      setIsValid(false);
      setErrorMessage("Invalid ZIP");
      return;
    }

    try {
      const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
      if (!response.ok) throw new Error("Invalid ZIP");

      const data = await response.json();
      setIsValid(true);
      setErrorMessage("");

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

  // Function to fetch ZIP code using Geolocation API
  const fetchLocationZIP = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      if (data.address && data.address.postcode) {
        const detectedZip = data.address.postcode;
        setZip(detectedZip);
        validateZip(detectedZip); // Validate the detected ZIP code
      } else {
        setErrorMessage("Could not fetch ZIP from location.");
      }
    } catch (error) {
      setErrorMessage("Failed to fetch location ZIP.");
    }
  };

  // Fetch location on component mount
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationZIP(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setErrorMessage("Please enter your ZIP manually.");
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported by your browser.");
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setZip(value);
    validateZip(value);
  };

  const handleSubmit = () => {
    if (!isValid || !country || !city || !stateval) {
      setErrorMessage("Invalid ZIP");
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
    <div className="mt-16 py-6 px-4 md:px-8 bg-[#F6F8F7] rounded-lg mx-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-4xl font-bold text-md">
          Life Insurance Options 2025
        </h1>
        <div className="mt-4 font-semibold md:text-xl">
          Quotes starting at <span className="text-[#4970FA] ">$15/month*</span>
        </div>

        <div className="flex md:flex-row flex-col gap-4 mt-4 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="relative w-full md:max-w-xs max-w-[9rem]">
              <input
                type="text"
                value={zip}
                onChange={handleChange}
                placeholder={isValid === false ? "" : "Enter ZIP code"}
                className={`md:p-3 p-2 ${
                  isValid === false ? "pt-6" : "pt-3"
                } rounded-md border-2 text-lg outline-none text-center w-full relative ${
                  isValid === null
                    ? "border-gray-300"
                    : isValid
                    ? "border-green-500"
                    : "border-red-500"
                }`}
                style={{
                  position: "relative",
                }}
              />

              {/* Error message as pseudo-element */}
              {isValid === false && (
                <span className="absolute top-1 left-1/2 transform -translate-x-1/2 text-red-500 text-xs pointer-events-none">
                  {errorMessage}
                </span>
              )}

              {/* Validation Icon */}
              {isValid !== null && (
                <span className="absolute right-3 top-4">
                  {isValid ? (
                    <CheckCircle className="text-green-500" size={20} />
                  ) : (
                    <XCircle className="text-red-500" size={20} />
                  )}
                </span>
              )}
            </div>
          </div>

          <button
            className="bg-blue-600 text-white md:px-4 md:py-3 py-4 px-6 rounded-md md:text-lg text-xl hover:bg-blue-700 transition"
            onClick={handleSubmit}
          >
            Start My Quote
          </button>
        </div>

        <div className="mt-8 text-center text-sm">
          <div className="flex flex-row justify-center items-center gap-1">
            <CircleCheck className="text-[#4970FA] w-5 h-5" />
            <p>It’s 100% free and 86 people are applying right now.</p>
          </div>
        </div>
        <div className="mt-12">
          <a href="tel:8337150369">
            <button className="bg-[#4970FA] text-white  px-2 rounded-lg text-lg gap-2 shadow-md  transition">
              <div className="flex flex-row items-center justify-center gap-4 px-2 py-4">
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
        </div>
        <div className="mt-1">
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
    </div>
  );
};

export default Option;
