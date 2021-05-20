import { firestore, storage } from "../../firebase/firebase.config";
import { useHistory } from "react-router";
import { useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { saveUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import "../../styles/registration-style.css";
export default function Resgistration() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [imagename, setImagename] = useState("");
  const [image, setImage] = useState(null);
  const addUser = async (e) => {
    e.preventDefault();
    let name, surname, username, description, email, password;
    const storeRef = storage.ref();
    setImagename("User Images/" + image.name);
    const fileRef = storeRef.child(imagename);
    await fileRef.put(image);
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    username = document.getElementById("username").value;
    description = document.getElementById("description").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password);
    await firestore
      .collection("Users")
      .add({
        Firstname: name,
        surname: surname,
        username: username,
        description: description,
        image: await fileRef.getDownloadURL(""),
      })
      .then(() => {
        console.log("user method");
        auth
          .signInWithEmailAndPassword(email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            await dispatch(saveUser(user));
            history.push("/");
          });
      });
  };
  const fileupload = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <h2
        className="login-center"
        style={{ marginTop: "40px", fontSize: "30px", textAlign: "center" }}
      >
        Sign up
      </h2>
      <p
        className="login-center"
        style={{ textAlign: "center", marginTop: "15px" }}
      >
        {" "}
        Already Registered? <a href="/login">Log In</a>{" "}
      </p>
      <form onSubmit={(e) => addUser(e)}>
        <div className="input-div">
          <p className="input-paragraph">Name:</p>
          <input
            id="name"
            className="input"
            required
            placeholder="enter name"
          />
        </div>
        <div className="input-div">
          <p className="input-paragraph">Surname:</p>
          <input
            id="surname"
            className="input"
            required
            placeholder="enter surname"
          />
        </div>
        <div className="input-div">
          <p className="input-paragraph">Username:</p>
          <input
            id="username"
            required
            className="input"
            placeholder="enter username"
          />
        </div>
        <textarea
          required
          style={{
            margin: "20px 26%",
            display: "block",
            width: "60%",
            fontSize: "15px",
            padding: "10px",
          }}
          id="description"
          placeholder="enter user description..."
        />
        <div className="input-div">
          <p className="input-paragraph">Email:</p>
          <input
            id="email"
            className="input"
            required
            placeholder="enter email"
            type="email"
            style={{
              display: "block",
              margin: "10px auto",
              padding: "10px",
              width: "50%",
            }}
          />
        </div>
        <div className="input-div">
          <p className="input-paragraph">Password:</p>
          <input
            required
            id="password"
            className="input"
            placeholder="enter password"
            type="password"
            style={{
              display: "block",
              margin: "10px auto",
              padding: "10px",
              width: "50%",
            }}
          />
        </div>
        <input
          onChange={fileupload}
          required
          type="file"
          style={{
            margin: "10px 41.5%",
            display: "block",
            padding: "10px",
            textAlign: "center",
          }}
          id="file"
        />
        <input className="loginn" type="submit" value="submit" />
      </form>
    </div>
  );
}
