import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { auth, firestore } from "../../firebase/firebase.config";
import { userLogOut } from "../../redux/actions";
function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userdata, setUserdata] = useState();
  const [fulldata, setFulldata] = useState([]);
  auth.onAuthStateChanged((user) => {
    setUserdata(user);
  });
  return (
    <div>
      {userdata == null ? (
        <>
          <button onClick={() => history.push("/profile/AKx7GLHyOsdYMKP70pvB")}>
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
