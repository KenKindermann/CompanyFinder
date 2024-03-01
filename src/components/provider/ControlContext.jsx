import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../../utils/axiosHelpers";
import { DataContext } from "./DataContext";

export const ControlContext = createContext();

export const ControlProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [control, setControl] = useState({
    desc: false,
    page: 1,
    size: 10,
    sort: "company",
  });

  useEffect(() => {
    let params = new URLSearchParams(control).toString();
    params = params.replace(/\+/g, "%20");
    const query = `?${params}`;
    console.log(query);
    setQuery(query);
  }, [control]);

  const value = {
    control,
    setControl,
    query,
    setQuery,
  };

  return <ControlContext.Provider value={value}>{children}</ControlContext.Provider>;
};
