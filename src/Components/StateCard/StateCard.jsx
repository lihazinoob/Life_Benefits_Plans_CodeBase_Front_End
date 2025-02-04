import React from "react";
import { US_STATES } from "../../Contants/stateData";
import { useNavigate } from "react-router-dom";
const StateCard = () => {
  const navigate = useNavigate();

  
  const handleStateClick = (stateName) =>
  {
    // Saving the data to localstorage so that it doess not vanish 
    localStorage.setItem("selectedState",stateName);
    // Navigate to the form page with the selected state
    navigate("/form",{
      state:{
        selectedState:stateName
      }
    });
  }

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-12 px-4 text-center">
        {US_STATES.map(({ name }) => (
          <button
            key={name}
            className="bg-inherit hover:bg-[#27B5CE] text-black hover:text-white font-semibold py-4 px-2 rounded border-2 border-solid transition duration-200"
            onClick={() => handleStateClick(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StateCard;
