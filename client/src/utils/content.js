import Arhar from "../assets/images/arhar.jpg";
import Bajra from "../assets/images/bajra.jpg";
import Barley from "../assets/images/barley.jpg";
import Copra from "../assets/images/copra.jpg";
import Cotton from "../assets/images/cotton.jpg";
import Gram from "../assets/images/gram.jpg";
import Groundnut from "../assets/images/groundnut.jpg";
import Jowar from "../assets/images/jowar.jpg";
import Jute from "../assets/images/jute.jpg";
import Maize from "../assets/images/maize.jpg";
import Masoor from "../assets/images/masoor.jpg";
import Moong from "../assets/images/moong.jpeg";
import Niger from "../assets/images/niger.jpg";
import Paddy from "../assets/images/paddy.jpg";
import Ragi from "../assets/images/ragi.jpg";
import Rape from "../assets/images/rape.jpg";
import Safflower from "../assets/images/safflower.jpg";
import Sesamum from "../assets/images/sesamum.jpg";
import Soyabean from "../assets/images/soyabean.jpg";
import Sugarcane from "../assets/images/sugarcane.jpg";
import Sunflower from "../assets/images/sunflower.jpg";
import Urad from "../assets/images/urad.jpg";
import Wheat from "../assets/images/wheat.jpg";

import SoilImg from "../assets/icons/soilimg.jpg";
// import Diseaseimg from "../assets/icons/diseaseimg.jpg";
import Priceimg from "../assets/icons/priceimg.jpg";
import Home from "../assets/icons/home.jpg";
import Location from "../assets/icons/location.jpg";

import { GrLinkedin } from "react-icons/gr";
import { BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const content = {
  Crops: [
    { name: "Arhar", icon: Arhar },
    { name: "Bajra", icon: Bajra },
    { name: "Barley", icon: Barley },
    { name: "Copra", icon: Copra },
    { name: "Cotton", icon: Cotton },
    { name: "Gram", icon: Gram },
    { name: "Groundnut", icon: Groundnut },
    { name: "Jowar", icon: Jowar },
    { name: "Jute", icon: Jute },
    { name: "Maize", icon: Maize },
    { name: "Masoor", icon: Masoor },
    { name: "Moong", icon: Moong },
    { name: "Niger", icon: Niger },
    { name: "Paddy", icon: Paddy },
    { name: "Ragi", icon: Ragi },
    { name: "Rape", icon: Rape },
    { name: "Safflower", icon: Safflower },
    { name: "Sesamum", icon: Sesamum },
    { name: "Soyabean", icon: Soyabean },
    { name: "Sugarcane", icon: Sugarcane },
    { name: "Sunflower", icon: Sunflower },
    { name: "Urad", icon: Urad },
    { name: "Wheat", icon: Wheat },
  ],
  landingPage: {
    title: "Ministry of Agriculture & Farmers' Welfare",
    logo: "images/patta.png",
    heading: "KrishiCare",
    subheading: "Your Trusted Digital Farming Companion.",
    description:
      "Empowering Farmers with Agricultural Wisdom: KrishiCare - Unlock the doors to agricultural enlightenment with KrishiCare. Navigate the intricate world of farming effortlessly and empower yourself with agricultural wisdom at your fingertips. From understanding best farming practices to decoding agricultural policies, KrishiCare is your go-to source for clarity in the complex world of agriculture.",
    buttons: [
      {
        text: "Signup",
        bgColor: "bg-yellow-500",
        textColor: "text-white",
        hoverColor: "bg-yellow-600",
        focusColor: "focus:ring-yellow-500",
      },
      {
        text: "Farmer",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        hoverColor: "bg-gray-300",
        focusColor: "focus:ring-gray-200",
      },
      {
        text: "Trader",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        hoverColor: "bg-gray-300",
        focusColor: "focus:ring-gray-200",
      },
      {
        text: "Inspector",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        hoverColor: "bg-gray-300",
        focusColor: "focus:ring-gray-200",
      },
    ],
    image: "images/lp.jpg",
  },
  hero: {
    firstName: "KrishiCare",
    LastName:
      "Empowering Indian Farmers with Cutting-Edge AI & ML: Your Comprehensive Solution for Better Farming Practices, Enhanced Productivity, and Fair Rewards.Feel free to adjust it as needed!",
    btnArray: ["A Programmer", "AI & ML Enthusiast"],
    image: Home,
  },
  about: {
    content:
      "Myself I am Santhosh. A diligent pre-final Computer Science student at VIT Chennai with an immense passion for AI&ML and MERN. Currently I am SAMSUNG PRISM developer. A passionate programmer, highly motivated and quick learner. I am always curious about things and enjoy learning. I like to solve problems and fix errors. I am a detailed oriented person and I keep my goals and tasks organized.",
  },
  aboutus: {
    content1:
      "KrishiCare is a transformative platform designed to help farmers make informed decisions and become more self-reliant. By integrating advanced technology and machine learning algorithms, KrishiCare provides a detailed view of farming based on soil analysis, weather patterns, local climate, seasonal changes, and crop prices. This comprehensive approach enables farmers to select the most suitable crops for their environment and make strategic decisions to maximize their earnings.",
    content2:
      "In addition to recommending the best crops to plant, KrishiCare offers forecasts for crop prices, helping farmers plan their planting and harvesting schedules effectively. The platform also includes tools for monitoring crop health and progress, allowing farmers to make necessary adjustments throughout the growing season. By equipping farmers with these insights, KrishiCare ensures they are well-informed and capable of managing their farming operations independently.",
    content3:
      "KrishiCare goes beyond crop management by offering a complete solution that supports farmers from cultivation to sale. Farmers can sell their produce through the platform, while inspectors use advanced deep learning technology to assess crop quality and detect diseases through image analysis. Once the crops pass inspection, traders can purchase them directly. This streamlined process enables farmers to control their operations and income, ensuring a more efficient and profitable farming experience.",
    content4:
      "With an easy-to-use interface, KrishiCare is designed for all users—farmers, inspectors, and traders. Farmers can manage their crops and sales, inspectors can perform quality checks, and traders can source high-quality produce. KrishiCare provides a comprehensive, user-friendly platform that supports every aspect of the farming process, making it a valuable resource for achieving greater independence and success in agriculture.",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "Report Inaccuracy or Discuss Projects with us",
    social_media: [
      {
        text: "santhosh.raminedi22@gmail.com",
        icon: GrMail,
        link: "mailto:santhosh.raminedi22@gmail.com",
      },
      {
        text: "santhosh.22.11",
        icon: BsInstagram,
        link: "https://www.instagram.com/santhosh.22.11/",
      },
      {
        text: "raminedisanthosh22",
        icon: GrLinkedin,
        link: "https://www.linkedin.com/in/raminedisanthosh22/",
      },
      {
        text: "Santhosh2231",
        icon: BsGithub,
        link: "https://github.com/Santhosh2231",
      },
      {
        text: "Santhosh Raminedi",
        icon: BsFacebook,
        link: "https://www.facebook.com/santhosh.raminedi",
      },
    ],
  },
  predictions: {
    title: "Goals",
    subtitle: "Our Mission",
    solutions_content: [
      {
        org: "Crop prediction based on locality and Seasons",
        logo: "images/cropseason.png",
        link: "/cropanalysis",
        work: "Crop prediction based on locality and seasons is a crucial aspect of modern farming. By utilizing local climate data and historical weather patterns, farmers can make informed decisions on which crops to grow, leading to higher yields and improved profitability.",
      },
      {
        org: "Crop prediction based on Soil fertility",
        logo: "images/cropsoil.png",
        link: "/soilanalysis",
        work: "Agriculture forms a major occupation in countries like India. Hence, achieving good yield in the crops grown by farmers is the major concern. Various environmental factors have a significant impact on the crop yield. One such component that contributes majorly to the crop yield is soil.",
      },
      {
        org: "Crop Price Prediction",
        logo: "images/price.png",
        link: "/priceforecast",
        work: "Crop price estimation and evaluation are done to take an intelligent decision before farming a specific type of crop. Predicting the price of a crop will help in taking better decisions which results in minimizing the loss and managing the risk of price fluctuations.",
      },
      {
        org: "Plant Disease Detection",
        logo: "images/plantdisease.png",
        link: "/plantdisease",
        work: "An AI-powered chatbot with voice capabilities offers farmers real-time assistance and expert advice, making it easier to address farming challenges. With natural language processing and voice recognition, farmers can quickly access information, receive personalized recommendations, and manage their agricultural operations more efficiently.",
      },
    ],
  },
};

export default content;
