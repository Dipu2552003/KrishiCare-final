import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inspect = () => {
  const [crops, setCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/crops');
        setCrops(response.data);
      } catch (error) {
        console.error('Error fetching crops:', error);
      }
    };

    fetchCrops();
  }, []);

  const handleCardClick = (crop) => {
    setSelectedCrop(crop);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCrop(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Crop List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {crops.map((crop) => (
          <div
            key={crop._id}
            className="border rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100"
            onClick={() => handleCardClick(crop)}
          >
            <h3 className="text-lg font-semibold mb-2">{crop.cropName}</h3>
            <p><strong>Type:</strong> {crop.cropType}</p>
            <p><strong>Offer Type:</strong> {crop.offerType}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCrop && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 z-50 overflow-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full mx-4 sm:mx-6 lg:mx-8 max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold uppercase">Government of India</h1>
              <h2 className="text-xl font-semibold mt-2 uppercase">Agreement for Farm Labor Contracting Services</h2>
               </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold underline">Recitals</h3>
              <p className="text-base mb-2">
                A. Company desires to use the services of Contractor on an independent contractor basis for the purpose of performing agricultural services, such as tending, weeding, pruning trees or vines, and harvesting Company's products.
              </p>
              <p className="text-base mb-2">
                B. Contractor warrants that Contractor is a farm labor contractor, duly registered and licensed as such under applicable laws. With respect to all actions, such as the hiring of laborers by the Contractor to provide services under this Company may use the Contractor under this Agreement, it is understood and agreed that Contractor assumes exclusive liability, as the same relates to such actions.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold underline">1. Duties</h3>
              <p className="text-base mb-2">Contractor will perform agricultural work as per the terms outlined below:</p>
              <ul className="list-disc pl-6 text-base">
              <li><strong>Farmer Name</strong> {selectedCrop.farmerId.name}</li>
                <li><strong>Type:</strong> {selectedCrop.cropType}</li>
                <li><strong>Offer Type:</strong> {selectedCrop.offerType}</li>
                <li><strong>Date:</strong> {new Date(selectedCrop.date).toLocaleDateString()}</li>
                <li><strong>Total Weight:</strong> {selectedCrop.totalWeight} {selectedCrop.weightUnit}</li>
                <li><strong>Price Unit:</strong> {selectedCrop.priceUnit}</li>
                <li><strong>Product Type:</strong> {selectedCrop.productType}</li>
                <li><strong>Status:</strong> {selectedCrop.productStatus}</li>
                <li><strong>Buyer:</strong> {selectedCrop.buyer || 'N/A'}</li>
                <li><strong>Delivery Terms:</strong> {selectedCrop.deliveryTerms || 'N/A'}</li>
                <li><strong>Quality Assurance:</strong> {selectedCrop.qualityAssurance || 'N/A'}</li>
              </ul>
              <p className="text-base mt-2">
                Contractor will provide all necessary permits and approvals to carry out these duties.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold underline">2. Pricing</h3>
              <p className="text-base mb-2">
                The agreed price for the services is ₹<span className="underline"></span>.
                Payment shall be made as per the terms outlined in the payment terms section.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold underline">3. Insurance</h3>
              <p className="text-base mb-2">
                The Contractor agrees to provide insurance as per the applicable laws, including liability insurance covering all actions under this agreement.
              </p>
              <p className="text-base mb-2">
                The name, address, and telephone number of the insurance carrier providing that insurance are:
                <span className="underline"> ____________</span>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold underline">4. Date of Agreement</h3>
              <p className="text-base">This agreement is dated <span className="underline">{new Date(selectedCrop.date).toLocaleDateString()}</span>.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold underline">5. Signatures</h3>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-base">Seller: __________</p>
                  <p className="text-base mt-2">Buyer: __________</p>
                </div>
                <div>
                  <p className="text-base">Date: __________</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-blue-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inspect;
