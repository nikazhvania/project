import React from "react";
import { useHistory } from "react-router";

function HomePage() {
  const profileRedirect = () => {
    history.push("/profile/ShJOWyOoliNHSez2IkYz");
  };
  const history = useHistory();
  return <button onClick={() => profileRedirect()}>profile</button>;
}

export default HomePage;
