import "../../styles/sawoli.css";
import { useHistory } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { saveUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const userPassAuth = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await dispatch(saveUser(user));
        history.push("/dashboard");
      });
  };

  return (
    <div className="main">
      <form onSubmit={(e) => userPassAuth(e)}>
        <div className="text">
          <h2 style={{ textAlign: "center" }}>Welcome Back!</h2>
          <p className="margin-top" style={{ textAlign: "center" }}>
            sign in tu get the most out of Mziuri
          </p>
        </div>
        <input
          required
          id="email"
          className="loginInput one"
          placeholder="enter email"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/User.png`}
          className="user"
        />
        <input
          required
          id="password"
          className="loginInput"
          placeholder="enter password"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/key.png`}
          className="key"
        />
        <div className="downtext">
          <p>
            Remember me <input type="checkbox" />
          </p>
          <a href="/reset/ShJOWyOoliNHSez2IkYz">Forgot Password?</a>
        </div>
        <input type="submit" value="submit" className="loginn" />
        Login
      </form>
    </div>
  );
}
