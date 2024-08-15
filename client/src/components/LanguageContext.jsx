import React, { createContext, useState, useContext } from 'react';

// Create Language Context
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using context
const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
