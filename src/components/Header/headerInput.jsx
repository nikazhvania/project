import { useHistory } from "react-router";
import PropTypes from "prop-types";
import React from "react";

export default function SearchInput({ placeholder, value }) {
  const history = useHistory();
  const handleSearch = (e) => {
    if (e.key == "Enter") {
      history.push(`/search/${e.target.value}`);
      value = e.target.value;
    }
  };

  return (
    <input
      className="input"
      defaultValue={value}
      placeholder={placeholder}
      onKeyDown={(e) => handleSearch(e)}
    />
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: "Search posts",
  value: "",
};
