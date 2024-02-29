import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState(null);
  const [favorites, setFavorites] = useState(JSON.parse(window.localStorage.getItem("CompanyFinderFavorites")) || []);

  useEffect(() => {
    window.localStorage.setItem("CompanyFinderFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const value = {
    companyData,
    setCompanyData,
    favorites,
    setFavorites,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
