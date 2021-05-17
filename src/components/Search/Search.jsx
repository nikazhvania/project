import { useHistory } from "react-router";
import PropTypes from "prop-types";
import React from "react";

function SearchInput({ placeholder, value }) {
  const history = useHistory();
  const handleSearch = (e) => {
    if (e.key == "Enter") {
      if (e.target.value.includes("/")) {
        return alert("search result can't include /");
      } else {
        history.push(`/search/${e.target.value}`);
        value = e.target.value;
      }
    }
  };

  return (
    <div className="inputform">
      <input
        className="Searchinput"
        defaultValue={value}
        placeholder={placeholder}
        onKeyDown={(e) => handleSearch(e)}
      />
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: "Find the topics you care about ...",
  value: "",
};

export default SearchInput;
