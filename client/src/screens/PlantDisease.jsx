import React, { useState } from "react";
import axios from "axios";

const PlantDisease = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImageUploaded(true); // Set imageUploaded to true
      const reader = new FileReader();
      reader.onload = (e) => setPreviewImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedImage) {
      alert("Please select an image file first.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);

    reader.onloadend = async () => {
      try {
        const base64Image = reader.result.split(",")[1];

        // Send the image to the Flask API
        const response = await axios.post(
          "http://127.0.0.1:5000/api/plantdisease",
          {
            image_data: base64Image,
          }
        );

        if (response.data.success) {
          setPrediction(response.data.disease);
          setError(null);
        } else {
          setError(response.data.message);
          setPrediction(null);
        }
      } catch (err) {
        console.error("Error sending image to API:", err);
        setError("Error sending image to API.");
        setPrediction(null);
      }
    };
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden max-w-full">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex items-center justify-between max-w-screen-xl">
        <div className="flex-1 pr-6">
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            Find out which disease has been caught by your plant
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Please Upload The Image
              </h2>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {previewImage && (
                <img
                  className="max-w-xl container mt-4 rounded-md shadow-md"
                  src={previewImage}
                  alt="Preview"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Upload and Classify
            </button>

            {prediction && (
              <p className="text-center text-green-600 font-semibold mt-4">
                Predicted Disease: {prediction}
              </p>
            )}
            {error && (
              <p className="text-center text-red-600 font-semibold mt-4">
                Error: {error}
              </p>
            )}
          </form>
        </div>
        {!imageUploaded && (
          <div className="flex-none w-1/3">
            <img
              className="w-full h-auto rounded-md shadow-md"
              src="/images/ani.gif"
              alt="Animated"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantDisease;
