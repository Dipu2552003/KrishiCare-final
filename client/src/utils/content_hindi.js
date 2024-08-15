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
    { name: "अरहर", icon: Arhar },
    { name: "बाजरा", icon: Bajra },
    { name: "बार्ली", icon: Barley },
    { name: "कोप्रा", icon: Copra },
    { name: "कपास", icon: Cotton },
    { name: "चने", icon: Gram },
    { name: "ग्रोन्डनट", icon: Groundnut },
    { name: "ज्वार", icon: Jowar },
    { name: "जूट", icon: Jute },
    { name: "मक्का", icon: Maize },
    { name: "मसूर", icon: Masoor },
    { name: "मूँग", icon: Moong },
    { name: "नाइजर", icon: Niger },
    { name: "धान", icon: Paddy },
    { name: "रागी", icon: Ragi },
    { name: "रैपसीड", icon: Rape },
    { name: "सफ्लावर", icon: Safflower },
    { name: "तिल", icon: Sesamum },
    { name: "सोयाबीन", icon: Soyabean },
    { name: "गन्ना", icon: Sugarcane },
    { name: "सूरजमुखी", icon: Sunflower },
    { name: "उड़द", icon: Urad },
    { name: "गेंहू", icon: Wheat },
  ],
  landingPage: {
    logo: "images/patta.png",
    title: "कृषि और किसान कल्याण मंत्रालय",
    heading: "KisanCare",
    subheading: "आपका भरोसेमंद डिजिटल कृषि साथी।",
    description:
      "किसानCare के साथ कृषि ज्ञान को सशक्त बनाना: किसानCare - कृषि के जटिल संसार को आसानी से नेविगेट करें और कृषि ज्ञान को अपनी उंगलियों पर सशक्त करें। बेहतरीन खेती के तरीके से लेकर कृषि नीतियों को समझने तक, किसानCare कृषि के जटिल दुनिया में स्पष्टता के लिए आपका पसंदीदा स्रोत है।",
    buttons: [
      {
        text: "साइनअप",
        bgColor: "bg-yellow-500",
        textColor: "text-white",
        hoverColor: "bg-yellow-600",
        focusColor: "focus:ring-yellow-500",
      },
      {
        text: "किसान",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        hoverColor: "bg-gray-300",
        focusColor: "focus:ring-gray-200",
      },
      {
        text: "व्यापारी",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        hoverColor: "bg-gray-300",
        focusColor: "focus:ring-gray-200",
      },
      {
        text: "निरीक्षक",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        hoverColor: "bg-gray-300",
        focusColor: "focus:ring-gray-200",
      },
    ],
    image: "images/lp.jpg",
  },
  hero: {
    firstName: "AgroVision",
    LastName: "AI & ML के साथ खेती में क्रांति",
    btnArray: ["प्रोग्रामर", "AI & ML उत्साही"],
    image: Home,
  },
  about: {
    content:
      "मेरा नाम संथोष है। मैं VIT चेन्नई में एक मेहनती प्री-फाइनल कंप्यूटर साइंस छात्र हूं और AI&ML और MERN के प्रति अत्यधिक जुनूनी हूं। वर्तमान में मैं SAMSUNG PRISM डेवलपर हूं। मैं एक उत्साही प्रोग्रामर हूं, अत्यधिक प्रेरित और त्वरित सीखने वाला हूं। मैं हमेशा चीजों के बारे में जिज्ञासु रहता हूं और सीखने का आनंद लेता हूं। मुझे समस्याओं को हल करने और त्रुटियों को ठीक करने में मजा आता है। मैं एक विस्तृत विचार वाला व्यक्ति हूं और अपने लक्ष्यों और कार्यों को व्यवस्थित रखता हूं।",
  },
  aboutus: {
    content1:
      "AgroVision एक अभिनव परियोजना है जिसका उद्देश्य किसानों को फसलों के चयन और उनके कृषि संचालन के निर्णय लेने के तरीके को क्रांतिकारी बनाना है। अत्याधुनिक प्रौद्योगिकी और मशीन लर्निंग एल्गोरिदम का उपयोग करके, AgroVision किसानों को उनकी फार्म की संभावनाओं की एक व्यापक और सटीक तस्वीर प्रदान करता है। इसमें मिट्टी की विश्लेषण, स्थान आधारित डेटा, और वर्षा की जानकारी शामिल है, जिसका उपयोग किसी विशेष क्षेत्र के लिए सबसे उपयुक्त फसलों का निर्धारण करने के लिए किया जा सकता है।",
    content2:
      "AgroVision न केवल सबसे अच्छा फसल लगाने की सिफारिशें प्रदान करता है बल्कि किसानों को अनुमानित फसल मूल्य पूर्वानुमान भी प्रदान करता है। यह किसानों को उनकी फसल विकल्पों के बारे में सूचित निर्णय लेने में मदद करता है, यह सुनिश्चित करता है कि वे अपने लाभ को अधिकतम कर सकें। इसके अतिरिक्त, AgroVision द्वारा प्रदान की गई फसल विश्लेषण किसानों को समय के साथ उनकी फसलों की प्रगति को ट्रैक करने और आवश्यकतानुसार समायोजन करने में मदद करता है।",
    content3:
      "AgroVision द्वारा उपयोग किए गए एल्गोरिदम लगातार सीख रहे हैं और सुधार रहे हैं, वास्तविक समय के डेटा और नवीनतम शोध को ध्यान में रखते हुए किसानों को सबसे अद्यतित जानकारी प्रदान करने के लिए। यह यह सुनिश्चित करने में मदद करता है कि किसानों को सबसे सटीक जानकारी प्राप्त हो, फसल विफलता के जोखिम को कम करने और सफलता की संभावनाओं को बढ़ाने में।",
    content4:
      "AgroVision एक उपयोगकर्ता-मित्रवत इंटरफेस भी प्रदान करता है जो किसानों को आवश्यक जानकारी को प्राप्त और समझने में आसान बनाता है। चाहे आप एक अनुभवी किसान हों या अभी शुरुआत कर रहे हों, AgroVision के पास आपके फसलों और कृषि संचालन के बारे में सूचित निर्णय लेने के लिए आवश्यक उपकरण और संसाधन हैं।",
  },
  Contact: {
    title: "संपर्क करें",
    subtitle: "असमान्यता की रिपोर्ट करें या हमारे साथ परियोजनाओं पर चर्चा करें",
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
    title: "लक्ष्य",
    subtitle: "हमारा मिशन",
    solutions_content: [
      {
        org: "स्थानीयता और मौसम के आधार पर फसल भविष्यवाणी",
        logo: Location,
        link: "/cropanalysis",
        work: "स्थानीय जलवायु डेटा और ऐतिहासिक मौसम पैटर्न का उपयोग करके फसल भविष्यवाणी एक महत्वपूर्ण आधुनिक कृषि पहलू है। इससे किसानों को यह तय करने में मदद मिलती है कि कौन सी फसलें उगाई जाएं, जिससे उत्पादन में वृद्धि और लाभ में सुधार होता है।",
      },
      {
        org: "मिट्टी की उर्वरता के आधार पर फसल भविष्यवाणी",
        logo: SoilImg,
        link: "/soilanalysis",
        work: "भारत जैसे देशों में कृषि एक प्रमुख व्यवसाय है। इसलिए, किसानों द्वारा उगाई गई फसलों में अच्छा उत्पादन प्राप्त करना एक प्रमुख चिंता है। विभिन्न पर्यावरणीय कारक फसल की उपज पर महत्वपूर्ण प्रभाव डालते हैं। मिट्टी एक ऐसा घटक है जो फसल की उपज में महत्वपूर्ण भूमिका निभाता है।",
      },
      {
        org: "फसल मूल्य भविष्यवाणी",
        logo: Priceimg,
        link: "/priceforecast",
        work: "फसल मूल्य अनुमान और मूल्यांकन ऐसा किया जाता है जिससे एक विशेष प्रकार की फसल उगाने से पहले एक बुद्धिमान निर्णय लिया जा सके। फसल की कीमत की भविष्यवाणी करने से बेहतर निर्णय लेने में मदद मिलती है, जिससे हानि को कम करने और मूल्य उतार-चढ़ाव के जोखिम को प्रबंधित करने में मदद मिलती है।",
      },
    ],
  },
};

export default content;
