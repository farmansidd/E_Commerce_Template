import React, { createContext, useState } from 'react';

// Create the context
export const KidsContext = createContext();

// Create the provider component
export const KidsContextProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSize, setSelectedSize] = useState(null);
  const [ageGroup, setAgeGroup] = useState('all');

  // Handler for size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  return (
    <KidsContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        sortBy,
        setSortBy,
        selectedSize,
        setSelectedSize,
        ageGroup,
        setAgeGroup,
        handleSizeSelect,
      }}
    >
      {children}
    </KidsContext.Provider>
  );
};
