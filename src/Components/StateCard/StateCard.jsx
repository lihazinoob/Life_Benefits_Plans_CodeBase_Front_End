import React from "react";
import { US_STATES } from "../../Contants/stateData";
import { useNavigate } from "react-router-dom";

const StateCard = () => {
  const navigate = useNavigate();

  const handleStateClick = (stateName) => {
    // Saving the data to localStorage so that it does not vanish
    localStorage.setItem("selectedState", stateName);
    // Navigate to the form page with the selected state
    navigate("/form", {
      state: {
        selectedState: stateName,
      },
    });
  };
  const handleSelectChange = (e) => {
    const selectedState = e.target.value;
    if (selectedState) {
      handleStateClick(selectedState);
    }
  };

  return (
    <div className="w-full mt-10 py-6 px-4 md:px-8 bg-[#F6F8F7] rounded-lg">
      <div className="text-center font-semibold tracking-wide text-2xl md:text-4xl">
        Click on your state below
      </div>
      <div className="text-center mt-4 tracking-wider text-lg md:text-xl">
        To get a <span className="font-extrabold">FREE</span> life insurance
        quote & save!
      </div>
      {/* Dropdown for Mobile (below sm) */}
      <div className="block sm:hidden my-8 mx-auto  bg-[url('https://a-us.storyblok.com/f/1016477/350x210/bb37a90934/usa-map.webp')] bg-cover bg-center bg-no-repeat py-20">
        <select
          onChange={handleSelectChange}
          className="w-1/2 max-w-xs mx-auto block p-3 rounded border-2 border-solid text-sm font-semibold text-black bg-white focus:outline-none focus:border-[#4970FA]"
          defaultValue=""
        >
          <option value="" disabled className="text-center">
            Select your state
          </option>
          {US_STATES.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Grid Layout for Buttons */}
      <div className=" hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 my-8 text-center mx-auto max-w-screen-lg justify-center">
        {US_STATES.map(({ name }) => (
          <button
            key={name}
            className="rounded border-2 border-solid text-center w-full sm:w-3/4 md:w-2/3 lg:w-4/5 bg-inherit hover:bg-[#4970FA] text-black hover:text-white transition duration-200 text-sm sm:text-base cursor-pointer font-semibold py-3"
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
