import React, { useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ text, change }) => {
  const [placeholder, setPlaceholder] = useState("S");
  const fullPlaceholder = "Search here...";
  let timeInterval;

  useEffect(() => {
    // After component mounts
    setDynamicPlaceholder();

    // Before component unmounts
    return () => {
      clearTimeIntervalForDynamicPlaceholder();
    };
  }, []);

  const setDynamicPlaceholder = () => {
    timeInterval = setInterval(() => {
      setPlaceholder((prev) => {
        let newLength = (prev.length + 1) % (fullPlaceholder.length + 1);
        return fullPlaceholder.substring(0, newLength);
      });
    }, 500);
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
