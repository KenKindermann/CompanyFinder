// Hooks
import { createContext, useEffect, useState } from "react";

export const ControlContext = createContext();

export const ControlProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [control, setControl] = useState({
    desc: false,
    page: 1,
    size: 10,
    sort: "company",
  });

  // Change query when control changes
  useEffect(() => {
    let params = new URLSearchParams(control).toString();
    params = params.replace(/\+/g, "%20");
    const query = `?${params}`;
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
