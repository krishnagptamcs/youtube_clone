import React, { createContext, useEffect, useState } from "react";

import { fetchData } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [selectCategories, setSelectCategories] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {}, []);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
