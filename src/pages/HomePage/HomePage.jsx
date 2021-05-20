import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/profile/ShJOWyOoliNHSez2IkYz")}>
        profile
      </button>
      <button onClick={() => history.push(`/add-post`)}>add post</button>
    </div>
  );
}

export default HomePage;
