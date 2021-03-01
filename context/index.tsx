import { createContext, useEffect } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  useEffect(() => {
    console.log("contect");
  });
  return <AppContext.Provider value={1}>{children}</AppContext.Provider>;
};

export default AppProvider;
