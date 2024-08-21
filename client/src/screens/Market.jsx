import React, { useState } from 'react';
import { FaSeedling, FaAppleAlt, FaCoffee, FaOilCan } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // React Router v6

function Market() {
  const [selectedCategory, setSelectedCategory] = useState('grains');
  const navigate = useNavigate(); // React Router v6

  const categories = {
    grains: ['Rice', 'Corn', 'Wheat', 'Barley'],
    nuts: ['Almonds', 'Walnuts', 'Pistachios', 'Cashews'],
    coffee: ['Arabica', 'Robusta'],
    oils: ['Olive Oil', 'Sunflower Oil', 'Coconut Oil'],
  };

  const handleItemClick = (item) => {
    const routes = {
      Rice: '/market/rice',
      Corn: '/market/corn',
      Wheat: '/market/wheat',
      Barley: '/market/barley',
      Almonds: '/market/almonds',
      Walnuts: '/market/walnuts',
      Pistachios: '/market/pistachios',
      Cashews: '/market/cashews',
      Arabica: '/market/arabica',
      Robusta: '/market/robusta',
      'Olive Oil': '/market/olive-oil',
      'Sunflower Oil': '/market/sunflower-oil',
      'Coconut Oil': '/market/coconut-oil',
    };

    navigate(routes[item]); // Navigate to the static route
  };

  return (
    <div
      className="min-h-screen bg-green-100 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/marketbg.jpg")' }}
    >
      <div className="w-3/4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white uppercase">
          Select a Product to Buy/Sell
        </h2>
        <div className="flex justify-center mb-10 space-x-4">
          <button
            className={`flex items-center px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${selectedCategory === 'grains' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-green-600 shadow'}`}
            onClick={() => setSelectedCategory('grains')}
          >
            <FaSeedling className="mr-2" /> Grains
          </button>
          <button
            className={`flex items-center px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${selectedCategory === 'nuts' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-green-600 shadow'}`}
            onClick={() => setSelectedCategory('nuts')}
          >
            <FaAppleAlt className="mr-2" /> Nuts
          </button>
          <button
            className={`flex items-center px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${selectedCategory === 'coffee' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-green-600 shadow'}`}
            onClick={() => setSelectedCategory('coffee')}
          >
            <FaCoffee className="mr-2" /> Green Coffee
          </button>
          <button
            className={`flex items-center px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${selectedCategory === 'oils' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-green-600 shadow'}`}
            onClick={() => setSelectedCategory('oils')}
          >
            <FaOilCan className="mr-2" /> Olive Oil & Other Oils
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {categories[selectedCategory].map((item) => (
            <div
              key={item}
              className="bg-white shadow-lg p-6 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <p className="text-lg font-semibold text-green-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Market;
