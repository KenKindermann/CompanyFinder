import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState(null);

  const value = {
    companyData,
    setCompanyData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
