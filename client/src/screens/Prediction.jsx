import React from "react";
import Soil from "../assets/icons/soilimg.jpg";
import Price from "../assets/icons/priceimg.jpg";
// import Disease from "../assets/icons/diseaseimg.jpg"
import { Link } from "react-router-dom";
import content from "../utils/content";

const Solutions = () => {
  const { predictions } = content;
  return (
    <div>
      <h4 className="text-center font-Merriweather my-2">
        Our Crop Predictions
      </h4>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {predictions.solutions_content.map((content, i) => (
            <Link to={content.link} key={i}>
              <div className="rounded overflow-hidden shadow-lg h-full flex flex-col">
                <div className="relative h-48">
                  <a href="#">
                    <img
                      className="w-full h-full object-cover"
                      src={content.logo}
                      alt="..."
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!">
                    <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      Photos
                    </div>
                  </a>
                  <a href="!#">
                    <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      <span className="font-bold">27</span>
                      <small>March</small>
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4 flex-grow">
                  <a
                    href="#"
                    className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                  >
                    {content.org}
                  </a>
                  <p className="text-gray-500 text-sm">{content.work}</p>
                </div>
                <div className="px-6 py-4 flex items-center">
                  <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex items-center">
                    <svg
                      height="13px"
                      width="13px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                            c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                            c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className="ml-1">6 mins ago</span>
                  </span>
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
