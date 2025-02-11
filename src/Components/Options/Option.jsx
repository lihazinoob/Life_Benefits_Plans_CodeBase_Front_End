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
        <h1 className="text-4xl font-bold ">Life Insurance Options 2025</h1>
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

        <div className="mt-8 text-center text-sm">
          <div className="flex flex-row justify-center items-center gap-1">
            <CircleCheck className="text-[#4970FA] w-5 h-5" />
            <p>It’s 100% free and 86 people are applying right now.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;
