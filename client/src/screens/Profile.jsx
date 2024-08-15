import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMapMarkerAlt,
  faTractor,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import farmerData from "../utils/data"; // Adjust the path if needed

const Profile = () => {
  const { name, district, state, field } = farmerData.farmer;
  const { area: fieldArea, crops } = field;

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
        <div className="flex flex-col items-center w-1/3 md:w-1/4 mb-4">
          <FontAwesomeIcon icon={faLeaf} className="text-green-500 text-3xl" />
          <p className="mt-2 text-gray-600">Crops</p>
        </div>
        <div className="flex flex-col items-center w-1/3 md:w-1/4 mb-4">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-green-500 text-3xl"
          />
          <p className="mt-2 text-gray-600">Land Information</p>
        </div>
        <div className="flex flex-col items-center w-1/3 md:w-1/4 mb-4">
          <FontAwesomeIcon
            icon={faTractor}
            className="text-green-500 text-3xl"
          />
          <p className="mt-2 text-gray-600">Crop Pattern</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-full max-w-screen-lg px-4 md:px-8 mt-4 bg-white p-4 rounded-lg shadow-md">
        <div className=" p-6 w-full max-w-screen-lg">
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
      </div>
    </div>
  );
};

export default Profile;
