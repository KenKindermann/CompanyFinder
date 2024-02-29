import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../../utils/axiosHelpers";
import { DataContext } from "./DataContext";

export const ControlContext = createContext();

export const ControlProvider = ({ children }) => {
  const { setCompanyData } = useContext(DataContext);
  const [control, setControl] = useState({
    desc: false,
    page: 1,
    size: 10,
    sort: "company",
  });

  useEffect(() => {
    const query = `?page=${control.page}&size=${control.size}&sort=${control.sort}&desc=${control.desc}`;
    console.log(query);
    getCompanies(query);
  }, [control]);

  const getCompanies = async (query) => {
    const companies = await fetchData(query);
    setCompanyData(companies);
  };

  const value = {
    control,
    setControl,
  };

  return <ControlContext.Provider value={value}>{children}</ControlContext.Provider>;
};
