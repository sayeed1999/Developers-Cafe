import React, { useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ text, change }) => {
  const [placeholder, setPlaceholder] = useState("");
  const placeholders = [
    "",
    "S",
    "Se",
    "Sea",
    "Sear",
    "Searc",
    "Search",
    "Search h",
    "Search he",
    "Search her",
    "Search here",
    "Search here.",
    "Search here..",
    "Search here...",
    "Search here",
    "Search here.",
    "Search here..",
    "Search here...",
  ];
  let timeInterval;

  useEffect(() => {
    console.log("rendering..");
    // After component mounts
    setDynamicPlaceholder();

    // Before component unmounts
    return () => {
      clearTimeIntervalForDynamicPlaceholder();
    };
  }, []);

  const setDynamicPlaceholder = () => {
    let index = 0;
    let length = placeholders.length;

    timeInterval = setInterval(() => {
      index %= length;
      setPlaceholder(placeholders[index]);
      index++;
    }, 800);
  };

  const clearTimeIntervalForDynamicPlaceholder = () => {
    clearInterval(timeInterval);
  };

  return (
    <input
      className="searchBar form-control"
      type="text"
      placeholder={placeholder}
      value={text}
      onChange={() => change(event.target.value)}
    />
  );
};

export default SearchBar;
