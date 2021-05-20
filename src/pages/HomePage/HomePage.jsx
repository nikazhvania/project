import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase.config";
import { userLogOut } from "../../redux/actions";
function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userStatus, setUserStatus] = useState();
  auth.onAuthStateChanged((user) => {
    setUserStatus(user);
  });
  return (
    <div>
      {userStatus == null ? (
        <>
          <button onClick={() => history.push("/profile/ShJOWyOoliNHSez2IkYz")}>
            profile
          </button>
          <button onClick={() => history.push(`/add-post`)}>add post</button>
        </>
      ) : (
        <div>
          <button onClick={() => dispatch(userLogOut(), history.push("/"))}>
            გამოსვლა...
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
