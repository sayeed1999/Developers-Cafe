import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  render() {
    const { text, change } = this.props;

    return (
      <input
        className="searchBar"
        type="text"
        placeholder="Search..."
        value={text}
        onChange={() => change(event.target.value)}
      />
    );
  }
}
