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

export { GoogleAuth, saveUser };
