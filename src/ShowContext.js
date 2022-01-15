import React, { useState, createContext } from "react";

const ShowContext = createContext();

export default ShowContext;

export const ShowContextProvider = ({ children }) => {
  const [showData, setShowData] = useState([]);
  const [pageData, setPageData] = useState("");
  return (
    <ShowContext.Provider
      value={{ showData, setShowData, pageData, setPageData }}
    >
      {children}
    </ShowContext.Provider>
  );
};
