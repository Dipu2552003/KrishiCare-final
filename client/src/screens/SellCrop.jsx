import React, { useState } from 'react';
import axios from 'axios';

const SellCrop = () => {
  const [formData, setFormData] = useState({
    farmerId: "66c622c5fc0bc17f485d273f",
    cropName: '',
    cropType: '',
    offerType: '',
    date: '',
    totalWeight: '',
    weightUnit: '',
    priceUnit: '',
    productType: '',
    productStatus: '',
    buyer: '',
    deliveryTerms: '',
    qualityAssurance: ''
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('farmerId', formData.farmerId);
    data.append('cropName', formData.cropName);
    data.append('cropType', formData.cropType);
    data.append('offerType', formData.offerType);
    data.append('date', formData.date);
    data.append('totalWeight', formData.totalWeight);
    data.append('weightUnit', formData.weightUnit);
    data.append('priceUnit', formData.priceUnit);
    data.append('productType', formData.productType);
    data.append('productStatus', formData.productStatus);
    data.append('buyer', formData.buyer);
    data.append('deliveryTerms', formData.deliveryTerms);
    data.append('qualityAssurance', formData.qualityAssurance);
    if (photo) {
      data.append('photo', photo);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/crops', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Crop added:', response.data);
      alert("Crop added successfully!");

      // Reset form data
      setFormData({
        farmerId: "66c622c5fc0bc17f485d273f",
        cropName: '',
        cropType: '',
        offerType: '',
        date: '',
        totalWeight: '',
        weightUnit: '',
        priceUnit: '',
        productType: '',
        productStatus: '',
        buyer: '',
        deliveryTerms: '',
        qualityAssurance: ''
      });
      setPhoto(null);
    } catch (error) {
      console.error('Error adding crop:', error);
      alert("Error adding crop: " + (error.response?.data?.message || error.message));
    }
  };

  return (
<div className="container mx-auto p-6 md:p-8">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Crop</h2>
  <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-lg p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Form Fields */}
      {[
        { label: 'Crop Name', name: 'cropName', type: 'text', required: true },
        { label: 'Crop Type', name: 'cropType', type: 'text', required: true },
        { label: 'Offer Type', name: 'offerType', type: 'text', required: true },
        { label: 'Date', name: 'date', type: 'date' },
        { label: 'Total Weight', name: 'totalWeight', type: 'number', required: true },
        { label: 'Weight Unit', name: 'weightUnit', type: 'text', required: true },
        { label: 'Price Unit', name: 'priceUnit', type: 'text', required: true },
        { label: 'Product Type', name: 'productType', type: 'text', required: true },
        { label: 'Product Status', name: 'productStatus', type: 'text', required: true },
        { label: 'Buyer', name: 'buyer', type: 'text' },
        { label: 'Delivery Terms', name: 'deliveryTerms', type: 'text' },
        { label: 'Quality Assurance', name: 'qualityAssurance', type: 'text' }
      ].map(({ label, name, type, required }) => (
        <div key={name} className="flex flex-col gap-2">
          <label htmlFor={name} className="text-gray-700 font-medium">{label}</label>
          <input
            type={type}
            name={name}
            id={name}
            value={formData[name]}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={required}
          />
        </div>
      ))}
    </div>
    <div className="flex flex-col gap-2 mt-4">
      <label htmlFor="photo" className="text-gray-700 font-medium">Crop Image</label>
      <input
        type="file"
        name="photo"
        id="photo"
        onChange={handleFileChange}
        className="border border-gray-300 rounded-lg p-2 w-full bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button
      type="submit"
      className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
    >
      Add Crop
    </button>
  </form>
</div>


  );
};

export default SellCrop;
