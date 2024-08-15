import React, { useState } from "react";

const SellCrop = () => {
  const [crop, setCrop] = useState({
    farmerName: "",
    cropName: "",
    location: "",
    price: "",
    image: null,
  });

  const [crops, setCrops] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCrop({ ...crop, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCrops([...crops, { ...crop, id: Date.now(), verified: false }]);
    setCrop({
      farmerName: "",
      cropName: "",
      location: "",
      price: "",
      image: null,
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sell Your Crop</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700">Farmer Name:</label>
          <input
            type="text"
            value={crop.farmerName}
            onChange={(e) => setCrop({ ...crop, farmerName: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Crop Name:</label>
          <input
            type="text"
            value={crop.cropName}
            onChange={(e) => setCrop({ ...crop, cropName: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location:</label>
          <input
            type="text"
            value={crop.location}
            onChange={(e) => setCrop({ ...crop, location: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price ($):</label>
          <input
            type="number"
            value={crop.price}
            onChange={(e) => setCrop({ ...crop, price: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Available Crops</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.length > 0 ? (
          crops.map((crop) => (
            <div
              key={crop.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md"
            >
              {crop.image && (
                <img
                  src={crop.image}
                  alt={crop.cropName}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{crop.cropName}</h3>
              <p className="text-gray-700">Farmer: {crop.farmerName}</p>
              <p className="text-gray-700">Location: {crop.location}</p>
              <p className="text-gray-700">Price: ${crop.price}</p>
              <p className="text-gray-700">
                Verified: {crop.verified ? "Yes" : "No"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No crops available.</p>
        )}
      </div>
    </div>
  );
};

export default SellCrop;
