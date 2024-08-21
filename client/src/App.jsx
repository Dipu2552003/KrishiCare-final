import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./screens/Footer";
import Home from "./screens/Home";

import CropPrice from "./screens/CropPrice";
import SoilCrop from "./screens/SoilCrop";
import Prediction from "./screens/Prediction";
import SoilFertility from "./screens/SoilFertility";
import CropAnalysis from "./screens/CropAnalysis";
import CropLocation from "./screens/CropLocation";
import About from "./screens/About";
import Login from "./screens/Login";
import LandingPage from "./screens/LandingPage";
import Crops from "./screens/Crops";
import { LanguageProvider } from "./components/LanguageContext";
import Weather from "./screens/Weather";
import Signup from "./screens/Signup";
import Inspect from "./screens/Inspect";
import Trade from "./screens/Trade";
import Scheme from "./screens/Scheme";
import ChatBot from "./screens/ChatBot";
import Profile from "./screens/Profile";
import SellCrop from "./screens/SellCrop";
import PlantDisease from "./screens/PlantDisease";
import Farm from "./screens/Farm";
import AddFarm from "./screens/AddFarm";
import Blog from "./screens/blog";
import Market from "./screens/Market";
import Try2 from "./screens/Try2";

function App() {
  const location = useLocation();
  const isLandingOrLogin =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <LanguageProvider>
      <div>
        {!isLandingOrLogin && <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/inspect" element={<Inspect />} />
          <Route path="/Trade" element={<Trade />} />
          <Route path="/about" element={<About />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/plantdisease" element={<PlantDisease />} />
          <Route path="/cropanalysis" element={<CropAnalysis />} />
          <Route path="/locationcropprediction" element={<CropLocation />} />
          <Route path="/soilanalysis" element={<SoilFertility />} />
          <Route path="/soilcropprediction" element={<SoilCrop />} />
          <Route path="/priceforecast" element={<Crops />} />
          <Route path="/priceforecast/:crop" element={<CropPrice />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/sellcrop" element={<SellCrop />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/addfarm" element={<AddFarm />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/market" element={<Market />} />
          <Route path="market/rice" element={<SellCrop />} />
          <Route path="/try2" element={<Try2 />} />
        </Routes>
        {/* {!isLandingOrLogin && <Footer />} */}
      </div>
    </LanguageProvider>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
