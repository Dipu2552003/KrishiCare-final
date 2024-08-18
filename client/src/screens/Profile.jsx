import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMapMarkerAlt,
  faTractor,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import farmerData from "../utils/data"; // Adjust the path if needed

const Profile = () => {
  const [activeSection, setActiveSection] = useState("farmerInfo"); // State to track the active section
  const { name, district, state, field } = farmerData.farmer;
  const { area: fieldArea, crops } = field;

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleAddFarm = () => {};

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <div
        className="w-full bg-cover bg-center h-[200px] relative"
        style={{
          backgroundImage: "url('https://path-to-your-background-image.jpg')",
        }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-[120px] h-[120px] bg-white border-4 border-green-500 rounded-full overflow-hidden shadow-md">
            <img
              src="images/farmer.png"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 text-center w-full px-4 md:px-8">
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-600">{fieldArea}</p>
        <p className="text-gray-600">
          {district}, {state}
        </p>
      </div>

      <div className="flex flex-wrap justify-between w-full max-w-screen-lg px-4 md:px-8 mt-4 bg-white p-4 rounded-lg shadow-md">
        <div
          className="flex flex-col items-center w-1/3 md:w-1/4 mb-4 cursor-pointer"
          onClick={() => handleSectionChange("farmerInfo")}
        >
          <FontAwesomeIcon icon={faLeaf} className="text-green-500 text-3xl" />
          <p className="mt-2 text-gray-600">Farmer Info</p>
        </div>
        <div
          className="flex flex-col items-center w-1/3 md:w-1/4 mb-4 cursor-pointer"
          onClick={() => handleSectionChange("landInfo")}
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-green-500 text-3xl"
          />
          <p className="mt-2 text-gray-600">Land Information</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full max-w-screen-lg px-4 md:px-8 mt-4 bg-white p-4 rounded-lg shadow-md">
        {/* Farmer Info Section */}
        {activeSection === "farmerInfo" && (
          <div className="p-6 w-full">
            <h1 className="text-2xl font-bold text-gray-800">Farmer Profile</h1>
            <p className="mt-2 text-gray-600">Name: {name}</p>
            <p className="text-gray-600">District: {district}</p>
            <p className="text-gray-600">State: {state}</p>
            <p className="text-gray-600">Field Area: {fieldArea}</p>

            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-700">Crops</h2>
              <ul className="list-disc pl-5 mt-2">
                {crops.map((crop, index) => (
                  <li key={index} className="text-gray-600">
                    {crop.name}: {crop.area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Land Info Section */}
        {activeSection === "landInfo" && (
          <div className="p-6 w-full">
            <h1 className="text-2xl font-bold text-gray-800">
              Land Information
            </h1>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600">
                Location: {district}, {state}
              </p>
              <button
                className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => {
                  handleAddFarm();
                }}
              >
                Add Farm
              </button>
            </div>

            {/* Rest of the code */}
            <div className="mt-4 grid grid-cols-1 gap-4">
              {crops.map((crop, index) => (
                <div
                  key={index}
                  className="bg-green-100 p-4 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-700">
                      {crop.name} {/* Crop name */}
                    </h2>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteCrop(index)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Survey No: {crop.surveyNo}</p> {/* Survey number */}
                    <p>Soil Type: {crop.soilType}</p> {/* Soil type */}
                    <p>Area: {crop.area}</p> {/* Crop area */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
