import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/contextAPI";
import { fetchData } from "../utils/api";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { setLoading } = useContext(Context);
  const { searchQuery } = useParams();

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResult();
  }, [searchQuery]);

  const fetchSearchResult = () => {
    setLoading(true);
    fetchData(`search/?q=${searchQuery}`).then((res) => {
      console.log("the content in seacrh result is ",res);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]  ">
      <LeftNav />

      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-gray-100">
        <div className="gird grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if(item?.type !== "video") return false;
            return (
            <SearchResultVideoCard
              key={item?.video?.videoId}
              video={item?.video}
            />);
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
