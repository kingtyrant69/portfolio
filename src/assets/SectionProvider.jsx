import React, { createContext, useState, useContext } from 'react';

const SectionContext = createContext();

export const useSection = () => useContext(SectionContext);

export const SectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};