import React from 'react';

function SellCrop() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
      <form>
        {/* Product Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-gray-700">Product</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Rice</option>
              
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Type of Offer</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Bundle Deal</option>
              <option>Bulk Discount</option>
              <option>Limited Time</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Total Weight</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Weight Unit</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Metric Ton (M Ton)</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Price per weight unit (rs)</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          {/* <div>
            <label className="block text-gray-700">Advanced payment (%)</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" />
          </div> */}
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-gray-700">Product Type</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>small</option>
              <option>medium</option>
              <option>large</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Product Status</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Broken</option>
              <option>Brown</option>
              <option>Paddy</option>
              
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Variety</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Basmati</option>
              <option>Indrayani</option>
              <option>Kolam</option>
            </select>
          </div>
          {/* Add other input fields following the same structure */}
        </div>

        {/* Logistics Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-gray-700">Initial Delivery Date</label>
            <input type="date" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Final Delivery Date</label>
            <input type="date" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Offer Expiration Date</label>
            <input type="date" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Logistics Incoterms</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select one</option>
            </select>
          </div>
          <div className="col-span-3">
            <label className="block text-gray-700">Signature</label>
            <input type="file" accept=".png,.jpg,.jpeg,.pdf" className="w-full border border-gray-300 p-2 rounded" />
          </div>
        </div>

        {/* Terms and Submit Button */}
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">I agree with the Agri Marketplace Terms and Conditions for buy and sell offers</label>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit Offer</button>
      </form>
    </div>
  );
}

export default SellCrop;




