import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MultiStepForm = () => {
  const monthRef = useRef(null);
  const dayRef = useRef(null);
  const yearRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    month: "",
    day: "",
    year: "",
    coverage: "",
    gender: "",
    zipCode:
      location.state?.selectedZIP || localStorage.getItem("selectedZIP") || "",
    city:
      location.state?.selectedCity ||
      localStorage.getItem("selectedCity") ||
      "",
    state:
      location.state?.selectedState ||
      localStorage.getItem("selectedState") ||
      "",
    firstname: "",
    lastname: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [statesList, setStatesList] = useState([]);
  const [navigationDirection, setNavigationDirection] = useState("forward");

  useEffect(() => {
    const states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ];
    setStatesList(states);
  }, []);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" }); // Clear errors when user types

    if (field === "month" && value.length === 2 && value >= 1 && value <= 12) {
      dayRef.current.focus();
    } else if (
      field === "day" &&
      value.length === 2 &&
      value >= 1 &&
      value <= 31
    ) {
      yearRef.current.focus();
    }
  };

  // ZIP Code lookup (remains unchanged)
  const handleZipChange = async (zip) => {
    setFormData((prev) => ({ ...prev, zipCode: zip }));
    if (zip.length === 5) {
      try {
        const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
        if (!response.ok) throw new Error("Invalid ZIP Code");
        const data = await response.json();
        setFormData((prev) => ({
          ...prev,
          city: data.places?.[0]?.["place name"] || prev.city,
          state: data.places?.[0]?.["state"] || prev.state,
        }));
      } catch (error) {
        console.error("ZIP Code lookup failed:", error);
      }
    }
  };

  // Existing validation function (if you want to display errors)
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.month) newErrors.month = "Required";
      if (!formData.day) newErrors.day = "Required";
      if (!formData.year) newErrors.year = "Required";

      if (formData.year && (formData.year < 1900 || formData.year > 2025)) {
        newErrors.year = "Year must be between 1900 and 2025";
      }
    } else if (step == 2) {
      if (!formData.firstname) {
        newErrors.firstname = "First Name is Required";
      }
      if (!formData.lastname) {
        newErrors.lastname = "Last Name is Required";
      }
      if (!formData.phone) {
        newErrors.phone = "Phone Number is Required";
      } else {
        const rawPhone = formData.phone.replace(/\D/g, ""); // Strip non-digits
        if (rawPhone.length !== 10) {
          newErrors.phone = "Phone number must be 10 digits.";
        }
      }
    } else if (step === 3) {
      if (!formData.coverage) newErrors.coverage = "Required";
    } else if (step === 4) {
      if (!formData.gender) newErrors.gender = "Required";
    } else if (step === 5) {
      if (!formData.city) newErrors.city = "City is required.";
      if (!formData.state) newErrors.state = "State is required.";
      if (!formData.zipCode) newErrors.zipCode = "ZIP Code is required.";
      if (formData.zipCode && formData.zipCode.length !== 5) {
        newErrors.zipCode = "ZIP Code must be 5 digits.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Helper function to check if the current step is valid without setting errors.
  const isCurrentStepValid = () => {
    if (step === 1) {
      return (
        formData.month.trim() !== "" &&
        formData.day.trim() !== "" &&
        formData.year.trim() !== "" &&
        parseInt(formData.year, 10) >= 1900 &&
        parseInt(formData.year, 10) <= 2025
      );
    } else if (step == 2) {
      const rawPhone = formData.phone.replace(/\D/g, ""); // Strip non-digits
      return (
        formData.firstname.trim() !== "" &&
        formData.lastname.trim() !== "" &&
        formData.phone.trim() !== "" &&
        rawPhone.length === 10 // Check for 10 digits
      );
    } else if (step === 3) {
      return formData.coverage.trim() !== "";
    } else if (step === 4) {
      return formData.gender.trim() !== "";
    } else if (step === 5) {
      return (
        formData.city.trim() !== "" &&
        formData.state.trim() !== "" &&
        formData.zipCode.trim().length === 5
      );
    }
    return false;
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      try {
        console.log(formData);
        const response  = await fetch("https://script.google.com/macros/s/AKfycbyTto7ZXLpLNHOMgjuA5oQPyzqvVBjNqxPE_ii_OeoQeaJ2SVzGr-gQ8KLuEZDwSFeq/exec",
        {
          method:"POST",
          body:JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
          mode: "no-cors"
        });
        // alert("Data submitted successfully!");
        navigate("/congratulations");
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  // Auto-advance effect for steps 1 to 3
  useEffect(() => {
    // Validate current step fields
    const validationErrors = validateStep();

    // If there arCopye validation errors, show them immediately
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop auto-advancing if there are errors
    }

    // Auto-advance only if navigating forward and the current step is valid
    if (navigationDirection === "forward" && step < 5 && isCurrentStepValid()) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 800); // Delay for forward navigation
      return () => clearTimeout(timer);
    }

    // Reset navigation direction after handling the effect
    setNavigationDirection("forward");
  }, [formData, step, navigationDirection]);

  return (
    <div className="flex flex-col items-center mt-8 mb-10 bg-white px-8">
      {/* Progress Bar */}
      <div className="w-full max-w-lg">
        <div className="text-sm font-semibold text-gray-700 mb-1">
          {Math.floor(((step - 1) / 5) * 100)}% complete
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-[#4970FA] rounded-full transition-all"
            style={{ width: `${((step - 1) / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-lg bg-white text-center mt-6">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-gray-900">
              What's your date of birth?
            </h2>
            <div className="flex md:gap-10 gap-2  justify-center mt-5">
              {/* Month */}
              <div className="flex flex-col">
                <label className="text-lg">Month</label>
                <input
                  ref={monthRef}
                  type="text"
                  value={formData.month}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value === "" || (value >= 0 && value <= 12)) {
                      handleChange("month", value);
                    }
                  }}
                  placeholder="MM"
                  maxLength="2"
                  className={`border ${
                    errors.month ? "border-red-500" : "border-gray-300"
                  } rounded-md text-center text-xl p-3 w-24 focus:outline-none focus:ring-2 ${
                    errors.month ? "focus:ring-red-500" : "focus:ring-[#4970FA]"
                  }`}
                />
                {errors.month && (
                  <p className="text-red-500 text-sm mt-1">{errors.month}</p>
                )}
              </div>

              {/* Day */}
              <div className="flex flex-col">
                <label className="text-lg">Day</label>
                <input
                  ref={dayRef}
                  type="text"
                  value={formData.day}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value === "" || (value >= 0 && value <= 31)) {
                      handleChange("day", value);
                    }
                  }}
                  placeholder="DD"
                  maxLength="2"
                  className={`border ${
                    errors.day ? "border-red-500" : "border-gray-300"
                  } rounded-md text-center text-xl p-3 w-24 focus:outline-none focus:ring-2 ${
                    errors.day ? "focus:ring-red-500" : "focus:ring-[#4970FA]"
                  }`}
                />
                {errors.day && (
                  <p className="text-red-500 text-sm mt-1">{errors.day}</p>
                )}
              </div>

              {/* Year */}
              <div className="flex flex-col items-center w-28">
                <label className="text-lg">Year</label>
                <input
                  ref={yearRef}
                  type="text"
                  value={formData.year}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 4) {
                      handleChange("year", value);
                    }
                  }}
                  placeholder="YYYY"
                  maxLength="4"
                  className={`border w-full text-center text-xl p-3 rounded-md focus:outline-none focus:ring-2 ${
                    errors.year
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#4970FA]"
                  }`}
                />
                {errors.year && (
                  <p className="text-red-500 text-sm mt-1 w-full text-center">
                    {errors.year}
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-3xl font-bold text-gray-900">
              What’s your name and phone number?
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              We’ll use this to contact you about your quote.
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-row gap-2">
                <div>
                  <input
                    type="text"
                    value={formData.firstname}
                    onChange={(e) => handleChange("firstname", e.target.value)}
                    placeholder="First Name"
                    className={`border ${
                      errors.firstname ? "border-red-500" : "border-gray-300"
                    } rounded-md text-center text-xl p-2 w-full focus:outline-none focus:ring-2 ${
                      errors.firstname
                        ? "focus:ring-red-500"
                        : "focus:ring-[#4970FA]"
                    }`}
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstname}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    value={formData.lastname}
                    onChange={(e) => handleChange("lastname", e.target.value)}
                    placeholder="Last Name"
                    className={`border ${
                      errors.lastname ? "border-red-500" : "border-gray-300"
                    } rounded-md text-center text-xl p-2 w-full focus:outline-none focus:ring-2 ${
                      errors.lastname
                        ? "focus:ring-red-500"
                        : "focus:ring-[#4970FA]"
                    }`}
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastname}
                    </p>
                  )}
                </div>
              </div>

              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  let rawValue = e.target.value.replace(/\D/g, ""); // Remove non-digits
                  if (rawValue.length > 10) rawValue = rawValue.slice(0, 10); // Cap at 10 digits
                  let formattedValue = "";
                  if (rawValue.length > 0) {
                    formattedValue = `(${rawValue.substring(0, 3)}`;
                  }
                  if (rawValue.length >= 4) {
                    formattedValue += `) ${rawValue.substring(3, 6)}`;
                  }
                  if (rawValue.length >= 7) {
                    formattedValue += `-${rawValue.substring(6, 10)}`;
                  }

                  handleChange("phone", formattedValue);
                }}
                placeholder="(123) 456-7890"
                maxLength="14"
                inputMode="numeric"
                className={`border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md text-center text-xl p-2 w-full focus:outline-none focus:ring-2 ${
                  errors.phone ? "focus:ring-red-500" : "focus:ring-[#4970FA]"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <div className="w-full max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              What's your desired coverage amount?
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-2  gap-4 mt-6">
              {["$5,000", "$10,000", "$20,000", "$50,000", "$100,000+"].map(
                (amount) => (
                  <button
                    key={amount}
                    onClick={() => handleChange("coverage", amount)}
                    className={`p-4 border-2 rounded-md text-[20px] md:text-lg font-semibold transition-all ${
                      formData.coverage === amount
                        ? "border-[#4970FA] bg-blue-100"
                        : "border-gray-300 bg-white hover:border-[#4970FA]"
                    }`}
                  >
                    {amount}
                  </button>
                )
              )}
            </div>
            {errors.coverage && (
              <p className="text-red-500 text-sm mt-2">{errors.coverage}</p>
            )}
          </div>
        )}

        {step === 4 && (
          <>
            <h2 className="text-2xl font-bold text-gray-900">
              What is your gender?
            </h2>
            <div className="flex md:flex-row  flex-col gap-6 justify-center items-center mt-5">
              <button
                onClick={() => handleChange("gender", "Male")}
                className={`px-4 py-2 border border-[#4970FA] max-w-[20rem] rounded-md font-bold text-lg ${
                  formData.gender === "Male"
                    ? "bg-[#4970FA] text-white"
                    : "bg-gray-100"
                }`}
              >
                Male
              </button>
              <button
                onClick={() => handleChange("gender", "Female")}
                className={`px-4 py-2 border border-[#4970FA] max-w-[8rem] rounded-md font-bold text-lg ${
                  formData.gender === "Female"
                    ? "bg-[#4970FA] text-white"
                    : "bg-gray-100"
                }`}
              >
                Female
              </button>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-2">{errors.gender}</p>
            )}
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="text-3xl font-bold text-gray-900">
              What's your home address?
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              We verify your location to provide local quotes in your area.
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="City"
                className={`border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded-md text-center text-xl p-2 w-full focus:outline-none focus:ring-2 ${
                  errors.city ? "focus:ring-red-500" : "focus:ring-[#4970FA]"
                }`}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}

              <div className="flex gap-4">
                <select
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  className={`border ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  } rounded-md text-center text-xl p-2 w-full focus:outline-none focus:ring-2 ${
                    errors.state ? "focus:ring-red-500" : "focus:ring-[#4970FA]"
                  }`}
                >
                  <option value={formData.state}>
                    {formData.state || "Select State"}
                  </option>
                  {statesList.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}

                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    handleZipChange(value);
                  }}
                  placeholder="ZIP Code"
                  maxLength="5"
                  className={`border ${
                    errors.zipCode ? "border-red-500" : "border-gray-300"
                  } rounded-md text-center text-xl p-2 w-full focus:outline-none focus:ring-2 ${
                    errors.zipCode
                      ? "focus:ring-red-500"
                      : "focus:ring-[#4970FA]"
                  }`}
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                )}
              </div>
            </div>
          </>
        )}

        {/* Navigation Buttons: Only "Back" for steps 2-4 and "Submit" for step 4 */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={handlePrevious}
              className="px-4 py-2 text-lg border rounded-md text-[#4970FA]"
            >
              Back
            </button>
          )}
          {step === 5 && (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 text-lg font-semibold bg-[#4970FA] text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
