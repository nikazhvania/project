import { auth } from "../../firebase/firebase.config";
import { useDispatch } from "react-redux";
import { saveUser } from "../../redux/actions";
import { useHistory } from "react-router";
import "../../styles/sawoli.css";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userAuth = () => {
    console.log("user method");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await dispatch(saveUser(user));
        history.push(`/dashboard`);
      });
  };
  return (
    <div className="main">
      <div className="text">
        <h2 style={{ textAlign: "center" }}>Welcome Back!</h2>
        <p className="margin-top" style={{ textAlign: "center" }}>
          sign in tu get the most out of Mziuri
        </p>
      </div>
      <input id="email" className="loginInput one" placeholder="enter email" />
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/User.png`}
        className="user"
      />
      <input
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
      <button onClick={userAuth} className="loginn">
        Login
      </button>
    </div>
  );
}
