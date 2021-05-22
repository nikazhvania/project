import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../redux/actions";
import { Link } from "react-router-dom";
function HomePage() {
  const dispatch = useDispatch();

  const history = useHistory();

  return (
    <div>
      {/* {userdata == null ? (
        <>
          <button onClick={() => history.push("/profile/AKx7GLHyOsdYMKP70pvB")}>
            profile
          </button>
          <Link to="/add-post">
            <button>add post</button>{" "}
          </Link>
        </>
      ) : (
        <div>
          <button onClick={() => dispatch(userLogOut(), history.push("/"))}>
            გამოსვლა...
          </button>
          <Link to={`profile/${userdata.uid}`}>
            <button onChange={() => history.push(`/profile`)}>profile</button>
          </Link>
        </div>
      )} */}
    </div>
  );
}

export default HomePage;
