import React, { useState } from "react";

// Updated Card component
const Card = ({ title, crops, isActive, onClick }) => {
  const limitedCrops = crops.slice(0, 7);

  return (
    <div
      className={`min-w-[10rem] font-Inria md:min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 ${
        isActive ? "bg-gray-200" : ""
      }`}
      onClick={onClick}
    >
      <h6 className="font-Inria text-blue-600 text-lg">{title}</h6>
      {isActive && (
        <ul>
          {limitedCrops.map((crop, index) => (
            <li key={index} className="overflow-auto break-word">
              {crop}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Updated StateCrops component
const StateCrops = (props) => {
  const [activeCard, setActiveCard] = useState(null);
  const data = props.data.content;

  const handleCardClick = (title) => {
    setActiveCard(title === activeCard ? null : title); // Toggle card visibility
  };

  return (
    <div className="my-10 flex flex-col gap-5">
      {Object.entries(data).map(([title, crops]) => (
        <Card
          key={title}
          title={title}
          crops={crops}
          isActive={activeCard === title}
          onClick={() => handleCardClick(title)}
        />
      ))}
    </div>
  );
};

export default StateCrops;
