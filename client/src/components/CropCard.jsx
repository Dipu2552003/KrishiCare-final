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
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function CropCard() {
  const [amount, setAmount] = useState(350); // Initial price
  const [bid, setBid] = useState(""); // For storing user bid
  const [currentBid, setCurrentBid] = useState(350); // Current highest bid

  // Handle placing a bid
  const handlePlaceBid = () => {
    const bidAmount = parseFloat(bid);

    // Check if the bid amount is a valid number
    if (isNaN(bidAmount) || bidAmount <= 0) {
      toast.error("Please enter a valid bid amount.");
      return;
    }

    // Check if the bid amount is higher than the current bid
    if (bidAmount > currentBid) {
      setCurrentBid(bidAmount);
      setAmount(bidAmount);
      toast.success(
        `Bid placed successfully. Current highest bid: ₹${bidAmount}`
      );
    } else {
      toast.error("Bid amount must be higher than the current bid.");
    }

    // Clear bid input
    setBid("");
  };

  // Handle payment
  const handlePayment = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/payment/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          amount,
        }),
      });

      const data = await res.json();
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log(error);
      toast.error("Payment failed.");
    }
  };

  // Verify payment
  const handlePaymentVerify = async (data) => {
    const options = {
      key: "rzp_test_d6EaVYLYAwghkY", // Make sure to replace with your actual Razorpay key
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
    <Card className="mt-6 w-96 bg-[#222f3e] text-white">
      <CardHeader color="" className="relative h-96 bg-[#2C3A47]">
        {/* Image  */}
        <img
          src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/tshirts/pack-of-five-plain-tshirt-white/1.webp"
          alt="card-image"
        />
      </CardHeader>

      {/* CardBody */}
      <CardBody>
        {/* Typography For Title */}
        <Typography variant="h5" className="mb-2">
          My Crop Product
        </Typography>

        {/* Typography For Price  */}
        <Typography>
          ₹{currentBid} <span className="line-through">₹699</span>
        </Typography>

        {/* Bid Input Field */}
        <Input
          type="number"
          value={bid}
          onChange={(e) => setBid(e.target.value)}
          placeholder="Enter your bid"
          className="mt-4"
        />
      </CardBody>

      {/* CardFooter  */}
      <CardFooter className="pt-0">
        {/* Place Bid Button */}
        <Button onClick={handlePlaceBid} className="w-full bg-[#1B9CFC] mb-2">
          Place Bid
        </Button>

        {/* Buy Now Button  */}
        <Button onClick={handlePayment} className="w-full bg-[#1B9CFC]">
          Buy Now
        </Button>

        <Toaster />
      </CardFooter>
    </Card>
  );
}
