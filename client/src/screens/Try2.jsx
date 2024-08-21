import React from 'react';

// Static data for agreements
const staticAgreements = [
  {
    Farmer: 'Ravi Kumar',
    cropName: 'Rice',
    cropType: 'Basmati',
    offerType:'Bundle Deal',
    date: '2024-08-21',
    TotalWeight: '100',
    WeightUnit: 'M Ton',
    priceUnit:'20',
    productType: 'small',
    productStatus: 'Broken',
    buyer: '',
    deliveryTerms: 'Delivery within 7 days of payment',
    qualityAssurance: 'Certified by local agricultural board',

  },
];

// Main Component
const Try2 = () => {
  const selectedAgreement = staticAgreements[0]; // Automatically select the first agreement for demo purposes

  const totalPricing = selectedAgreement.priceUnit * selectedAgreement.TotalWeight;

  return (
    <div className="p-6 flex justify-center">
      {/* Document View */}
      {selectedAgreement && (
        <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg max-w-2xl w-full">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold uppercase">Government of India</h1>
            <h2 className="text-xl font-semibold mt-2 uppercase">Agreement for Farm Labor Contracting Services</h2>
            <p className="mt-2 text-sm font-semibold">This agreement is made this <span className="underline">_</span> day of <span className="underline">_</span>, 20<span className="underline">__</span></p>
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
              <li>Farmer Name: <span className="underline">{selectedAgreement.farmerId.name}</span></li>
              <li>Type of Offer: <span className="underline">{selectedAgreement.offerType}</span></li>
              <li>Crops to be harvested: <span className="underline">{selectedAgreement.cropType}</span></li>
              <li>Total Weight: <span className="underline">{selectedAgreement.TotalWeight}</span></li>
              <li>Unit of Weight: <span className="underline">{selectedAgreement.WeightUnit}</span></li>
              <li>Price Per Unit: <span className="underline">{selectedAgreement.priceUnit}</span></li>
              <li>Product Type: <span className="underline">{selectedAgreement.productType}</span></li>
              <li>Product Status: <span className="underline">{selectedAgreement.productStatus}</span></li>
              <li>Description: <span className="underline">{selectedAgreement.description}</span></li>
              <li>Payment Terms: <span className="underline">{selectedAgreement.paymentTerms}</span></li>
              <li>Delivery Terms: <span className="underline">{selectedAgreement.deliveryTerms}</span></li>
              <li>Quality Assurance: <span className="underline">{selectedAgreement.qualityAssurance}</span></li>
            
              <li>Product <span className="underline">{selectedAgreement.product}</span></li>
              </ul>
            <p className="text-base mt-2">
              Contractor will provide all necessary permits and approvals to carry out these duties.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold underline">2. Pricing</h3>
            <p className="text-base mb-2">
              The agreed price for the services is ₹<span className="underline">{totalPricing.toLocaleString()}</span>.
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
            <p className="text-base">This agreement is dated <span className="underline">{selectedAgreement.date}</span>.</p>
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
        </div>
      )}
    </div>
  );
};

export default Try2;