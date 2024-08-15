import React, { useEffect, useState, useReducer, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import StateCrops from "../components/StateCrops";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const CropAnalysis = () => {
  const [state, dispatch] = useReducer(dataReducer, { data: null });
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5000/api/cropanalysis"
        );
        dispatch({ type: "SET_DATA", payload: data });
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (mapInstance.current) return;

    mapInstance.current = L.map(mapRef.current, {
      center: [22.5937, 78.9629],
      zoom: 5,
      scrollWheelZoom: false,
      dragging: false,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapInstance.current);

    const states = [
      { name: "Andaman and Nicobar", center: [11.7401, 92.6586] },
      { name: "Andhra Pradesh", center: [15.9129, 79.74] },
      { name: "Arunachal Pradesh", center: [28.217, 94.7278] },
      { name: "Assam", center: [26.2006, 92.9376] },
      { name: "Bihar", center: [25.0961, 85.3131] },
      { name: "Chhattisgarh", center: [21.2787, 81.8661] },
      { name: "Delhi", center: [28.7041, 77.1025] },
      { name: "Goa", center: [15.2993, 74.124] },
      { name: "Gujarat", center: [22.2587, 71.1924] },
      { name: "Haryana", center: [29.0588, 76.0856] },
      { name: "Himachal Pradesh", center: [31.1048, 77.1734] },
      { name: "Jharkhand", center: [23.6102, 85.2799] },
      { name: "Karnataka", center: [15.3173, 75.7139] },
      { name: "Kerala", center: [10.8505, 76.2711] },
      { name: "Lakshadweep", center: [10.5667, 72.6417] },
      { name: "Madhya Pradesh", center: [22.9734, 78.6569] },
      { name: "Maharashtra", center: [19.7515, 75.7139] },
      { name: "Manipur", center: [24.6637, 93.9063] },
      { name: "Meghalaya", center: [25.467, 91.3662] },
      { name: "Mizoram", center: [23.1645, 92.9376] },
      { name: "Nagaland", center: [26.1584, 94.5624] },
      { name: "Odisha", center: [20.9517, 85.0985] },
      { name: "Punjab", center: [31.1471, 75.3412] },
      { name: "Rajasthan", center: [27.0238, 74.2179] },
      { name: "Sikkim", center: [27.533, 88.5122] },
      { name: "Tamil Nadu", center: [11.1271, 78.6569] },
      { name: "Telangana", center: [18.1124, 79.0193] },
      { name: "Tripura", center: [23.9408, 91.9882] },
      { name: "Uttar Pradesh", center: [26.8467, 80.9462] },
      { name: "Uttarakhand", center: [30.0668, 79.0193] },
      { name: "West Bengal", center: [22.9868, 87.855] },
    ];

    states.forEach((state) => {
      const marker = L.marker(state.center).addTo(mapInstance.current);
      marker.bindPopup(`<b>${state.name}</b>`).openPopup();

      marker.on("click", () => {
        setSelectedState(state.name);
      });
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex h-screen">
      {/* Left Half */}
      <div className="flex-1 overflow-auto p-4">
        <div className="md:mt-10 mx-3 sm:container">
          <button>
            <Link
              to="/locationcropprediction"
              className="block mt-4 lg:inline-block border-2 p-5 mx-auto bg-slate-100 hover:border-blue-800 hover:bg-blue-100 border-teal-500 rounded lg:mt-0 text-green-900 hover:text-white"
            >
              <h6 className="text-teal-700 md:text-4xl font-Merriweather">
                Get a suitable crop of your Location
              </h6>
            </Link>
          </button>

          {state.data ? (
            <>
              <div>
                <p className="text-sm md:text-2xl my-10 text-center">
                  Top Crops grown in States of India
                </p>
                <div>
                  <StateCrops data={state.data} />
                </div>
              </div>
            </>
          ) : (
            <LoadingBox />
          )}
        </div>
      </div>

      {/* Right Half */}
      <div className="w-1/2 relative">
        <div
          ref={mapRef}
          className="absolute inset-0"
          style={{ height: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default CropAnalysis;
