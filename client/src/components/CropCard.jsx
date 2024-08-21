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

export default function CropCard() {
  const [crops, setCrops] = useState([]);
  const [currentBid, setCurrentBid] = useState({});
  const [bids, setBids] = useState({});
  const [leaderboard, setLeaderboard] = useState([]);

  const [traderName, setTraderName] = useState("");
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

  const handlePayment = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/payment/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          amount: Object.values(currentBid).reduce((acc, val) => acc + val, 0),
        }),
      });

      const data = await res.json();
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log(error);
      toast.error("Payment failed.");
    }
  };

  const handlePaymentVerify = async (data) => {
    const options = {
      key: "rzp_test_d6EaVYLYAwghkY",
      amount: data.amount,
      currency: data.currency,
      name: "Devknus",
      description: "Test Mode",
      order_id: data.id,
      handler: async (response) => {
        try {
          const res = await fetch(`http://localhost:4000/api/payment/verify`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await res.json();
          if (verifyData.message) {
            toast.success(verifyData.message);
          } else {
            toast.error("Payment verification failed.");
          }
        } catch (error) {
          console.log(error);
          toast.error("Error verifying payment.");
        }
      },
      theme: {
        color: "#5f63b8",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
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
                      ₹{currentBid[crop._id]} <span className="line-through text-gray-400">₹699</span>
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
                    <Button onClick={handlePayment} className="w-full bg-yellow-500 hover:bg-yellow-600">
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
      <Toaster />
    </div>
  );
}
