import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const UserForm = () => {
  const location = useLocation();
  // const { selectedState } = location.state || {};
  const [selectedState, setSelectedState] = useState(
    location.state?.selectedState || localStorage.getItem("selectedState") || ""
  );
  
  useEffect(() => {
    if (selectedState) {
      localStorage.setItem("selectedState", selectedState); // Keep it stored
    }
  }, [selectedState]);
  
  console.log(selectedState); // Will persist even after refresh
  
  // State variables for the form fields
  const [state, setState] = useState(selectedState || "");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  // Function to fetch city and state when ZIP code is entered
  const handleZipChange = async (zip) => {
    setZipCode(zip);
    if (zip.length === 5) {
      // Valid ZIP length for the US
      try {
        const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
        if (!response.ok) throw new Error("Invalid ZIP Code");

        const data = await response.json();
        const newCity = data.places?.[0]?.["place name"];
        const newState = data.places?.[0]?.["state"];

        setCity(newCity || "");
        setState(newState || selectedState);
      } catch (error) {
        console.error("ZIP Code lookup failed:", error);
      }
    }
  };

  // Function to fetch state and ZIP when city is entered
  const handleCityChange = async (cityName) => {
    setCity(cityName);
    if (cityName.length > 2) {
      // Minimum length to avoid unnecessary calls
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/city?name=${cityName}`,
          {
            headers: { "X-Api-Key": "YOUR_API_KEY_HERE" }, // Replace with real API key
          }
        );
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        if (data.length > 0) {
          setState(data[0].state || selectedState);
          setZipCode(data[0].zip_code || "");
        }
      } catch (error) {
        console.error("City lookup failed:", error);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Fill out the form</h2>
      <form>
        <label>
          State:
          <input type="text" value={state} readOnly />
        </label>

        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => handleCityChange(e.target.value)}
            placeholder="Enter city name"
          />
        </label>

        <label>
          ZIP Code:
          <input
            type="text"
            value={zipCode}
            onChange={(e) => handleZipChange(e.target.value)}
            placeholder="Enter ZIP code"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
