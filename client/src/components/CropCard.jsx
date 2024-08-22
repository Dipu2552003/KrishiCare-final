/* eslint-disable no-unused-vars */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function CropCard() {
  const [crops, setCrops] = useState([]);
  const [currentBid, setCurrentBid] = useState({});
  const [bids, setBids] = useState({});
  const [leaderboard, setLeaderboard] = useState([]);

  const [traderName, setTraderName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const name = Cookies.get("traderName");
    if (name) {
      setTraderName(name);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/crops');
        const data = await res.json();

        const verifiedCrops = data.filter(crop => crop.verified === true);
        setCrops(verifiedCrops);

        const initialCurrentBid = {};
        const initialBids = {};
        const initialLeaderboard = verifiedCrops.map(crop => {
          initialCurrentBid[crop._id] = crop.currentBid || 350;
          initialBids[crop._id] = "";
          return {
            cropName: crop.cropName,
            highestBidder: crop.highestBidder || "None",
            highestBid: crop.currentBid || 350,
          };
        });
        setCurrentBid(initialCurrentBid);
        setBids(initialBids);
        setLeaderboard(initialLeaderboard);
      } catch (error) {
        console.log(error);
        toast.error("Error fetching crops.");
      }
    };

    fetchCrops();
  }, []);

  const handlePlaceBid = async (cropId, cropName) => {
    const bidAmount = parseFloat(bids[cropId]);

    if (isNaN(bidAmount) || bidAmount <= 0) {
      toast.error("Please enter a valid bid amount.");
      return;
    }

    if (bidAmount > currentBid[cropId]) {
      try {
        // Update bid in the backend
        const res = await fetch(`http://localhost:5000/api/crops/${cropId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currentBid: bidAmount,
            highestBidder: traderName,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to update bid in the backend");
        }

        // Update the frontend state after successful backend update
        setCurrentBid(prev => ({ ...prev, [cropId]: bidAmount }));
        setLeaderboard(prevLeaderboard =>
          prevLeaderboard.map(item =>
            item.cropName === cropName
              ? { ...item, highestBidder: traderName, highestBid: bidAmount }
              : item
          )
        );
        toast.success(`Bid placed successfully. Current highest bid: ₹${bidAmount}`);
      } catch (error) {
        console.log(error);
        toast.error("Error updating bid. Please try again.");
      }
    } else {
      toast.error("Bid amount must be higher than the current bid.");
    }

    setBids(prev => ({ ...prev, [cropId]: "" }));
  };

  const handleOpenModal = (crop) => {
    setSelectedCrop(crop);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCrop(null);
  };

  const handleVerifyClick = async () => {
    // Logic for verifying the agreement
    toast.success("Agreement verified.");
    handleCloseModal();
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {crops.length > 0 ? (
              crops.map((crop) => (
                <Card key={crop._id} className="bg-green-800 text-white shadow-lg rounded-lg overflow-hidden">
                  <CardHeader color="" className="relative h-48 bg-green-700">
                    <img
                      src={crop.photo || "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vehn%C3%A4pelto_6.jpg"}
                      alt="card-image"
                      className="object-cover w-full h-full"
                    />
                  </CardHeader>

                  <CardBody className="p-4">
                    <Typography variant="h6" className="mb-2 font-semibold">
                      {crop.cropName}
                    </Typography>
                    <Typography className="text-lg">
                      ₹{currentBid[crop._id]} <span className="line-through text-gray-400"></span>
                    </Typography>
                    <Input
                      type="number"
                      value={bids[crop._id]}
                      onChange={(e) => setBids(prev => ({ ...prev, [crop._id]: e.target.value }))}
                      placeholder="Enter your bid"
                      className="mt-4 bg-gray-800 text-white"
                    />
                  </CardBody>

                  <CardFooter className="p-4">
                    <Button onClick={() => handlePlaceBid(crop._id, crop.cropName)} className="w-full bg-yellow-500 hover:bg-yellow-600 mb-2">
                      Place Bid
                    </Button>
                    <Button onClick={() => handleOpenModal(crop)} className="w-full bg-yellow-500 hover:bg-yellow-600">
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <Typography>No verified crops available.</Typography>
            )}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <Typography variant="h6" className="text-xl font-semibold mb-4 text-gray-800">
            Leaderboard
          </Typography>
          <ul className="space-y-4">
            {leaderboard.length > 0 ? (
              leaderboard.map((item, index) => (
                <li key={index} className="p-4 border-b border-gray-300">
                  <Typography variant="body1" className="font-semibold text-lg text-gray-800">{item.cropName}</Typography>
                  <Typography className="text-gray-600">Highest Bidder: <span className="font-medium">{item.highestBidder}</span></Typography>
                  <Typography className="text-gray-600">Highest Bid: <span className="font-medium">₹{item.highestBid}</span></Typography>
                </li>
              ))
            ) : (
              <Typography>No bids placed yet.</Typography>
            )}
          </ul>
        </div>
      </div>

      {isModalOpen && selectedCrop && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 z-50 overflow-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full mx-4 sm:mx-6 lg:mx-8 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
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
              <p className="text-base mb-2">
                C. Contractor acknowledges and agrees that the Contractor is an independent contractor and shall not be deemed to be an employee, agent, or partner of the Company for any purpose.
              </p>
              <h3 className="text-lg font-semibold underline mt-4">Agreement</h3>
              <p className="text-base mb-2">
                1. Contractor agrees to provide agricultural services to Company in a professional and workmanlike manner, in accordance with the specifications and instructions provided by the Company.
              </p>
              <p className="text-base mb-2">
                2. Contractor shall be solely responsible for all federal, state, and local taxes, including but not limited to income tax, self-employment tax, and social security tax.
              </p>
              <p className="text-base mb-2">
                3. Contractor shall provide its own tools, equipment, and materials necessary to perform the services under this Agreement.
              </p>
              <p className="text-base mb-2">
                4. Contractor shall comply with all applicable laws and regulations in the performance of the services under this Agreement.
              </p>
              <p className="text-base mb-2">
                5. Contractor shall maintain adequate insurance coverage for the services provided under this Agreement, including but not limited to liability insurance and workers' compensation insurance.
              </p>
              <h3 className="text-lg font-semibold underline mt-4">Terms</h3>
              <p className="text-base mb-2">
                1. This Agreement shall commence on the date of acceptance by the Contractor and shall continue until terminated by either party upon thirty (30) days written notice.
              </p>
              <p className="text-base mb-2">
                2. Company may terminate this Agreement immediately if Contractor fails to perform the services in accordance with the specifications and instructions provided by the Company.
              </p>
              <p className="text-base mb-2">
                3. Contractor shall not assign this Agreement or any of its rights or obligations hereunder without the prior written consent of the Company.
              </p>
              <p className="text-base mb-2">
                4. This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior negotiations, understandings, and agreements.
              </p>
            </div>
            <div className="flex justify-center">
              <Button onClick={handleVerifyClick} className="bg-blue-500 text-white hover:bg-blue-600">
                Verify and Proceed
              </Button>
            </div>
          </div>
        </div>
      )}

      <Toaster />
    </div>
  );
}
