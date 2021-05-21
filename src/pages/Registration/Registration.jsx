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
  const [image, setImage] = useState(null);
  const addUser = async (e) => {
    e.preventDefault();
    let name, surname, username, description, email, password;
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    username = document.getElementById("username").value;
    description = document.getElementById("description").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password);
    const storageRef = storage.ref();
    const fileRef = storageRef.child("User Images/" + image.name);
    await fileRef.put(image);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await dispatch(saveUser(user));

        firestore
          .collection("Users")
          .doc(user.uid)
          .set({
            Firstname: name,
            surname: surname,
            username: username,
            description: description,
            image: await fileRef.getDownloadURL(),
          })
          .then(() => {
            history.push("/");
          });
      });
  };
  const fileUpload = (e) => {
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
          required
          className="input"
          id="file"
          type="file"
          onChange={fileUpload}
          style={{
            margin: "10px 42%",
            display: "block",
            padding: "10px",
          }}
        />
        <input className="loginn" type="submit" value="submit" />
      </form>
    </div>
  );
}
