import React from "react";
import { Link } from "react-router-dom";
import content from "../utils/content";

const Solutions = () => {
  const { predictions } = content;
  return (
    <div className="bg-gray-100 py-8">
      <h4 className="text-center font-Merriweather text-2xl font-semibold mb-8 text-gray-800">
        Our Crop Predictions
      </h4>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {predictions.solutions_content.map((item, i) => (
            <Link to={item.link} key={i} className="group">
              <div className="border border-gray-300 rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-48">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain p-2"
                      src={item.logo}
                      alt="Prediction"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-grow">
                  <h5 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition duration-500 ease-in-out">
                    {item.org}
                  </h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
