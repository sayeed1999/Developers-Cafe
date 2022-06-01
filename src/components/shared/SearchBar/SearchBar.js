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
    let dotdotdot = false;
    let tempPlaceholder = "";

    timeInterval = setInterval(() => {
      if (!dotdotdot) {
        setPlaceholder((prev) => {
          let newLength = (prev.length + 1) % (fullPlaceholder.length + 1);
          if (newLength === fullPlaceholder.length) {
            dotdotdot = true;
            tempPlaceholder = "Search here";
          }
          return fullPlaceholder.substring(0, newLength);
        });
      } else if (dotdotdot) {
        tempPlaceholder += ".";
        setPlaceholder((prev) => tempPlaceholder);
        if (tempPlaceholder === "Search here...") dotdotdot = false;
      }
    }, 400);
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
