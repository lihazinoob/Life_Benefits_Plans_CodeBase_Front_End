import React, { useRef, useState } from "react";
import { use } from "react";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!firstNameRef.current.value || !lastNameRef.current.value) {
      newErrors.name =
        "We need to know your name. What if we wanted to send you a birthday cake?";
    }
    if (!emailRef.current.value)
      newErrors.email = "Oops. Please supply a valid email address";
    if (!phoneRef.current.value)
      newErrors.phone =
        "Phone format: (###) ###-#### Please enter your phone number";
    if (!messageRef.current.value)
      newErrors.message = "Please enter your message.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setAlertMessage("Please fill in all required fields.");
    } else {
      setErrors({});
      setAlertMessage("");
      navigate("/");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      {/* Alert Message is shown here*/}

      {alertMessage && (
        <div className="flex items-center bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md shadow-md">
          <svg
            className="w-6 h-6 mr-3 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M4.93 4.93a10.05 10.05 0 0114.14 0m-1.41 1.41a8 8 0 00-11.32 0m-1.42 1.41a6 6 0 018.48 0m-1.41 1.41a4 4 0 00-5.66 0m1.41 1.41a2 2 0 012.83 0"
            />
          </svg>
          <p className="text-sm font-semibold">{alertMessage}</p>
        </div>
      )}

      <h2 className="text-3xl font-semibold tracking-widest text-center mb-8">
        Contact Us
      </h2>
      <div className="text-2xl font-semibold tracking-wide mb-4">
        Tell Us About Your Problem!
      </div>

      <hr className="mb-8 w-full border-t border-gray-500" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-8 ">
          <div className="w-full md:w-3/4">
            <label className="block text-sm font-medium mb-2 text-gray-600">
              First Name
            </label>
            <input
              ref={firstNameRef}
              type="text"
              className="w-full border p-2 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="w-full md:w-3/4">
            <label className="block text-sm font-medium mb-2 text-gray-600">
              Last Name
            </label>
            <input
              ref={lastNameRef}
              type="text"
              className="w-full border p-2 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        {errors.name && (
          <p className="text-[#c02b0a] text-sm pb-2">{errors.name}</p>
        )}
        <div className="pb-16 mt-16">
          <div className="pb-4">
            <div className="text-2xl font-semibold tracking-wide mb-4">
              How Can We Reach You?
            </div>

            <div className="font-light text-gray-500 mb-1">
              We would love to chat with you. How can we get in touch?
            </div>

            <hr className="mb-8 w-full border-t border-gray-500" />

            <label className="block text-sm font-medium mb-2 text-gray-600 ">
              Your Email Address{" "}
              <span className="text-[#c02b0a]"> (Required)</span>
            </label>

            <input
              ref={emailRef}
              type="email"
              className="w-full border p-2 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-[#c02b0a] text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Your Phone <span className="text-[#c02b0a]"> (Required)</span>
            </label>
            <input
              ref={phoneRef}
              type="tel"
              onChange={(e) => {
                let rawValue = e.target.value.replace(/\D/g, ""); // Remove non-digits
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

                e.target.value = formattedValue; // Directly modify input value
              }}
              placeholder="(123) 456-7890"
              maxLength="14" // Limit input to formatted phone number length
              className="w-full border p-2 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {errors.phone && (
              <p className="text-[#c02b0a] text-sm">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <div className="text-2xl font-semibold tracking-wide mb-4">
            What's on your mind?
          </div>
          <div className="font-light text-gray-500 mb-1">
            Please let us know what's on your mind. Have a question for us? Ask
            away.
          </div>

          <hr className="mb-16 w-full border-t border-gray-500" />

          <label className="block text-sm font-medium mb-2 text-gray-600 ">
            Your Comments/Questions{" "}
            <span className="text-[#c02b0a]"> (Required)</span>
          </label>

          <textarea
            ref={messageRef}
            className="w-full border p-2 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="6"
          ></textarea>

          {errors.message && (
            <p className="text-[#c02b0a] text-sm">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-1/3 bg-[#4970fa] text-white py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
