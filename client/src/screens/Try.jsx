import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faCow,
  faHammer,
  faUsers,
  faTractor,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { id: 1, name: "Commodities", icon: faSackDollar },
  { id: 2, name: "Cattle", icon: faCow },
  { id: 3, name: "Equipments", icon: faHammer },
  { id: 4, name: "Fieldforce", icon: faUsers },
  { id: 5, name: "Machinery", icon: faTractor },
  { id: 6, name: "Agriculture", icon: faSeedling },
];

const CategoryCard = ({ name, icon }) => (
  <div className="bg-gradient-to-r from-green-400 to-green-300 text-white rounded-lg p-6 m-3 w-40 h-40 flex flex-col items-center justify-center shadow-lg">
    <FontAwesomeIcon icon={icon} size="3x" />
    <h3 className="mt-4 font-semibold">{name}</h3>
  </div>
);

const Try = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Logo */}
      <div className="mb-6">
        <img src="logo.png" alt="Naagali Logo" className="w-28 h-28" />
      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold mb-6">Select the category</h1>

      {/* Category Cards */}
      <div className="grid grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            icon={category.icon}
          />
        ))}
      </div>

      {/* Continue Button */}
      <button className="mt-8 bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-8 rounded-lg">
        CONTINUE
      </button>
    </div>
  );
};

export default Try;
