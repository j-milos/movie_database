import React from "react";
import s from "./SearchBox.module.scss";

const SearchBox = (props) => {
  return (
    <div className={s.searchBox}>
      <input
        className={s.searchInput}
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
