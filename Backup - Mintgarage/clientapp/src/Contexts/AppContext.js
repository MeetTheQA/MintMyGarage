// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [basename, setBasename] = useState('/'); // Set your initial value

  const contextValue = {
    basename,
    setBasename,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
