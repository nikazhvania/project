import { SIGN_IN_WITH_GOOGLE } from "./constants";
import { firebase, auth } from "../firebase/firebase.config";
const GoogleAuth = () => async (dispatch) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(googleProvider).then((result) => {
    const token = result.credential.accessToken;
    const user = result.user;
    saveUser(user);
  });
};

const saveUser = (user) => async (dispatch) => {
  dispatch({
    type: SIGN_IN_WITH_GOOGLE,
    payload: user,
  });
};
const userLogOut = () => async (dispatch) => {
  auth.signOut().then(() => {
    console.log("user signed out");

    dispatch({
      type: SIGN_IN_WITH_GOOGLE,
      payload: null,
    });
  });
};

export { GoogleAuth, saveUser, userLogOut };
