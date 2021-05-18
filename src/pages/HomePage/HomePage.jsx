import React from "react";
import { useHistory } from "react-router";

function HomePage() {
  const profileRedirect = () => {
    history.push("/profile/ShJOWyOoliNHSez2IkYz");
  };
  const profileRedirect1 = () => {
    history.push("/reset/ShJOWyOoliNHSez2IkYz");
  };
  const history = useHistory();
  return (
    <div>
      <button onClick={() => profileRedirect()}>profile</button>
      <button onClick={() => profileRedirect1()}>reset password</button>
      <button onClick={() => history.push(`/add-post`)}>add post</button>
    </div>
  );
}

export default HomePage;
