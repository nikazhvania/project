import { firestore, storage } from "../../firebase/firebase.config";
import { useHistory } from "react-router";
import { useState } from "react";
export default function Resgistration() {
  const history = useHistory();
  const [imagename, setImagename] = useState("");
  const [image, setImage] = useState(null);
  const addUser = async () => {
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
        history.push(`/`);
      });
  };
  const fileupload = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <h2
        className="login-center"
        style={{ marginTop: "40px", fontSize: "30px" }}
      >
        Sign up
      </h2>
      <p className="login-center">
        {" "}
        Already Registered? <a href="/login">Log In</a>{" "}
      </p>
      <div className="input-div" style={{ marginTop: "20px" }}>
        <p>Name:</p>
        <input
          id="name"
          className="input"
          placeholder="enter name"
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "50%",
          }}
        />
      </div>
      <div className="input-div">
        <p>Surname:</p>
        <input
          id="surname"
          className="input"
          placeholder="enter surname"
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "50%",
          }}
        />
      </div>
      <div className="input-div">
        <p>Username:</p>
        <input
          id="username"
          className="input"
          placeholder="enter username"
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "50%",
          }}
        />
      </div>
      <textarea
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
        <p>Email:</p>
        <input
          id="email"
          className="input"
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
        <p>Password:</p>
        <input
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
        type="file"
        onChange={fileupload}
        style={{
          margin: "10px 41.5%",
          display: "block",
          padding: "10px",
          textAlign: "center",
        }}
        id="file"
      />
      <button className="loginn" onClick={() => addUser()}>
        Register
      </button>
    </div>
  );
}
