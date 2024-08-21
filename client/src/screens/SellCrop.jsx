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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/crops', formData);
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
    } catch (error) {
      console.error('Error adding crop:', error);
      alert("Error adding crop: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add New Crop</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <div key={name}>
            <label className="block mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="border p-2 w-full"
              required={required}
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Crop
        </button>
      </form>
    </div>
  );
};

export default SellCrop;
