import React, { createContext, useContext, useState } from "react";

const HomeContext = createContext();

export const useHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <HomeContext.Provider value={{ searchQuery, setSearchQuery, activeFilter,
      setActiveFilter, expandedCategories, toggleCategory }}>
      {children}
    </HomeContext.Provider>
  );
};