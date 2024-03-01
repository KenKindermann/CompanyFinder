// Hooks
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(window.localStorage.getItem("CompanyFinderFavorites")) || { content: [] }
  );

  // Set favorites in localStorage when it changes
  useEffect(() => {
    window.localStorage.setItem("CompanyFinderFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const value = {
    favorites,
    setFavorites,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
