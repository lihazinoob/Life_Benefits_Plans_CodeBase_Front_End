import React from "react";
import { US_STATES } from "../../Contants/stateData";
import { useNavigate } from "react-router-dom";
const StateCard = () => {
  const navigate = useNavigate();

  const handleStateClick = (stateName) => {
    // Saving the data to localstorage so that it doess not vanish
    localStorage.setItem("selectedState", stateName);
    // Navigate to the form page with the selected state
    navigate("/form", {
      state: {
        selectedState: stateName,
      },
    });
  };

  return (
    <div className="w-full mt-16 py-6 px-4 md:px-8 bg-[#F6F8F7] rounded-lg">
      <div className="text-center font-semibold tracking-wide text-4xl">
        Click on your state below
      </div>
      <div className="text-center mt-4 tracking-wider text-xl">
        To get a <span className="font-extrabold">FREE</span> life insurance
        quote & save!
      </div>

      {/* Grid Layout for Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-0.5 gap-y-2 my-12 text-center mx-auto ml-32 max-w-screen-lg">
        {US_STATES.map(({ name }) => (
          <div className="rounded border-2 border-solid text-center w-3/4 bg-inherit hover:bg-[#4970FA] text-black hover:text-white transition duration-200 text-xs cursor-pointer">
            <button
              key={name}
              className="font-semibold py-3"
              onClick={() => handleStateClick(name)}
            >
              {name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateCard;
