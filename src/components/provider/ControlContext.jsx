import { createContext, useState } from "react";

export const ControlContext = createContext();

export const ControlProvider = ({ children }) => {
  const [control, setControl] = useState(null);

  const value = {
    control,
    setControl,
  };

  return <ControlContext.Provider value={value}>{children}</ControlContext.Provider>;
};
