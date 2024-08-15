// src/components/SchemePage.js
import React, { useState } from "react";

const schemes = [
  {
    title: "Pradhan Mantri Fasal Bima Yojana",
    description:
      "A government-sponsored crop insurance scheme that integrates multiple stakeholders on a single platform.",
    image: "images/fasal_bima.jpg",
    link: "https://pmfby.gov.in/",
  },
  {
    title: "Soil Health Card Scheme",
    description:
      "Provides soil health cards to farmers which will carry crop-wise recommendations of nutrients and fertilizers required for the individual farms.",
    image: "images/soil_health_card.png",
    link: "https://soilhealth.dac.gov.in/home",
  },
  {
    title: "Pradhan Mantri Krishi Sinchai Yojana",
    description:
      "Aims to enhance the physical access of water on the farm and expand cultivable areas under assured irrigation.",
    image: "images/krishi_sinchay.jpg",
    link: "https://pmksy.gov.in/",
  },
  {
    title: "National Agriculture Market (e-NAM)",
    description:
      "An online trading platform for agricultural commodities in India.",
    image: "images/nam.png",
    link: "https://www.enam.gov.in/web/",
  },
  {
    title: "National Food Security Mission",
    description:
      "National Food Security Mission (NFSM) is a Centrally Sponsored Scheme launched in 2007 based on the recommendations of the agriculture sub-committee of NDC.",
    image: "images/nat_proj.jpg",
    link: "https://www.nfsm.gov.in/",
  },
  {
    title: "Agri Infrastructure Fund",
    description:
      "The scheme covers post-harvest management projects like supply chain services including e-marketing platforms, warehouse, silos and pack-houses.",
    image: "images/aif.jpg",
    link: "https://agriinfra.dac.gov.in/",
  },
];

const Scheme = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const handleOpenModal = (scheme) => {
    setSelectedScheme(scheme);
  };

  const handleCloseModal = () => {
    setSelectedScheme(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Agriculture Schemes for Farmers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleOpenModal(scheme)}
          >
            <img
              src={scheme.image}
              alt={scheme.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{scheme.title}</h2>
            <p className="text-gray-600">{scheme.description}</p>
          </div>
        ))}
      </div>

      {selectedScheme && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">
              {selectedScheme.title}
            </h2>
            <img
              src={selectedScheme.image}
              alt={selectedScheme.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{selectedScheme.description}</p>
            <a
              href={selectedScheme.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 underline mb-2"
            >
              Learn More
            </a>
            <button
              onClick={handleCloseModal}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scheme;
