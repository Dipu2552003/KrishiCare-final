import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [language, setLanguage] = useState("en");
  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      let contentModule;
      try {
        switch (language) {
          case "en":
            contentModule = await import("../utils/content");
            break;
          case "hi":
            contentModule = await import("../utils/content_hindi");
            break;
          // Add cases for Marathi and Tamil if they exist
          default:
            contentModule = await import("../utils/content"); // Fallback to English
        }
        setContent(contentModule.default);
      } catch (error) {
        console.error("Error loading content:", error);
      }
    };

    loadContent();
  }, [language]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  const { landingPage } = content;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-screen-xl flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Language Dropdown */}
        <div className="absolute top-4 right-4">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="py-2 px-4 bg-gray-200 border border-gray-300 rounded"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="mr">Marathi</option>
            <option value="ta">Tamil</option>
          </select>
        </div>

        <div className="lg:w-1/2 xl:w-5/12 flex flex-col items-start lg:pr-12">
          <div className="flex items-center mb-4">
            <img src={landingPage.logo} className="w-12" alt="Logo" />
            <div className="text-2xl font-semibold ml-4">
              {landingPage.title}
            </div>
          </div>
          <h1 className="text-7xl font-bold mt-6 mb-4">
            {landingPage.heading}
          </h1>
          <h2 className="text-2xl font-semibold mb-6">
            {landingPage.subheading}
          </h2>
          <p className="text-gray-700 mb-6">{landingPage.description}</p>
          <div className="flex space-x-4">
            {landingPage.buttons.map((button, index) => (
              <button
                key={index}
                className={`${button.bgColor} ${button.textColor} font-bold py-2 px-4 rounded transition duration-300 hover:${button.hoverColor} focus:outline-none focus:ring-2 ${button.focusColor} focus:ring-opacity-50`}
                onClick={() =>
                  (window.location.href =
                    button.text === "Signup" ? "/signup" : "/login")
                }
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2 xl:w-7/12 flex justify-center lg:justify-end lg:pl-12">
          <img
            src={landingPage.image}
            className="w-80 h-auto lg:w-full"
            alt="Farmer"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
