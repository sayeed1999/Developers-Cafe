import React, { useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ text, change }) => {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    // After component mounts
    let tempPlaceholder = "Search here...";
    let length = tempPlaceholder.length;
    let index = 0;
    let interval = setInterval(() => {
      index++;
      if (index > length) clearInterval(interval);
      setPlaceholder((prev) => tempPlaceholder.substring(0, index));
    }, 120);
    // Before component unmounts
    return () => {};
  }, []);

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
