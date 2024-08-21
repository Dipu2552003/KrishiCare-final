import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const AddFarm = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Locate user and place a marker at their location
    map.locate({ setView: true, maxZoom: 16 });

    map.on("locationfound", (e) => {
      const { latlng } = e;
      setUserLocation(latlng); // Update state with user location
      L.marker(latlng).addTo(map).bindPopup("You are here!").openPopup();
      
      // Draw a quadrilateral to show the farm area
      const farmArea = [
        [latlng.lat + 0.01, latlng.lng - 0.01],
        [latlng.lat + 0.01, latlng.lng + 0.01],
        [latlng.lat - 0.01, latlng.lng + 0.01],
        [latlng.lat - 0.01, latlng.lng - 0.01],
      ];
      
      L.polygon(farmArea, { color: 'blue', weight: 2 }).addTo(map).bindPopup("Farm Area");
    });

    map.on("locationerror", (e) => {
      alert(e.message);
    });

    return () => {
      map.off();
      map.remove();
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side: Map */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <div id="map" className="h-full"></div>
      </div>

      {/* Right Side: Farm Information and Daily Reminders */}
      <div className="w-full md:w-1/2 p-4 bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Farm Information</h2>
        <p className="text-gray-700 mb-6">
          Here you can find detailed information about the farm. This includes
          details such as soil quality, crop types, and other relevant
          information.
        </p>

        <h3 className="text-xl font-semibold mb-4">Daily Reminder</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Check soil moisture levels.</li>
          <li>Inspect crops for pests and diseases.</li>
          <li>Update farm logs with today's activities.</li>
        </ul>
      </div>
    </div>
  );
};

export default AddFarm;
