import React, { createContext, useState, useContext } from 'react';

// Create the context
const SectionContext = createContext();

// SectionProvider component to wrap around the app or sections that need this state
export const SectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('about');

  // This function can be used to update the current section
  const updateSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <SectionContext.Provider value={{ currentSection, updateSection }}>
      {children}
    </SectionContext.Provider>
  );
};

// Custom hook to use the SectionContext
export const useSection = () => {
  return useContext(SectionContext);
};
