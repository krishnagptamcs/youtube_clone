import React, { createContext, useEffect, useState } from "react";

import { fetchData } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  // at starting the fethicng will be done automatically 
  useEffect(() => {
    fetchSelectedCategoriesData(selectCategories);
  }, [selectCategories]);

  function fetchSelectedCategoriesData(query) {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({contents}) => {
      console.log(contents);
      setSearchResult(contents);
      console.log("the content in search resukt is ", searchResult)
      setLoading(false);
    });
  }

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
