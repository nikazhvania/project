import { firestore, storage } from "../../firebase/firebase.config";
import { useState } from "react";
import "../../styles/add-post.css";
import { useHistory } from "react-router";
export default function AddPost() {
  const history = useHistory();
  const [inputvalue, setInputvalue] = useState("");
  const [image, setImage] = useState(null);
  const addPost = async () => {
    let title, tags, content, date, author;
    tags = document.getElementById("tags").value;
    content = document.getElementById("content").value;
    title = document.getElementById("title").value;
    date = document.getElementById("date").value;
    author = document.getElementById("author").value;
    const storageRef = storage.ref();
    const fileRef = storageRef.child("User Images/" + image.name);
    await fileRef.put(image);
    firestore
      .collection("articles")
      .add({
        tags: tags,
        content: content,
        title: title,
        date: date,
        desc: document.getElementById("content").value,
        author: author,
        image: await fileRef.getDownloadURL(),
      })
      .then(() => {
        history.push(`/`);
      });
  };
  const fileUpload = (e) => {
    setImage(e.target.files[0]);
  };

  function handleTag(key) {
    if (inputvalue.includes(key)) {
      alert("Don't click the same tag twice");
    } else {
      setInputvalue(inputvalue + " " + key);
    }
  }
  return (
    <div
      className="form"
      style={{
        margin: "auto",
        width: "60%",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "2px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Add Post</h1>
      <input
        required
        className="input"
        id="title"
        style={{
          margin: "10px auto",
          display: "block",
          padding: "10px",
        }}
        placeholder="add title"
      />
      <input
        id="author"
        style={{
          margin: "10px auto",
          display: "block",
          padding: "10px",
        }}
        className="input"
        required
        placeholder="enter author"
      />
      <input
        required
        onClick={() => (document.getElementById("tag").style.display = "flex")}
        className="input"
        id="tags"
        style={{
          margin: "10px auto",
          display: "block",
          padding: "10px",
        }}
        placeholder="tags"
        value={inputvalue}
      />
      <div
        id="tag"
        style={{
          display: "none",
          width: "50%",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <button onClick={() => handleTag("technology")}>#technology</button>
        <button onClick={() => handleTag("news")}>#news</button>
        <button onClick={() => handleTag("applications")}>#applications</button>
        <button onClick={() => handleTag("computers")}>#computers</button>
      </div>
      <input
        required="true"
        className="input"
        id="date"
        style={{
          margin: "10px auto",
          display: "block",
          padding: "10px",
        }}
        type="date"
        placeholder="add date"
      />
      <textarea
        required="true"
        id="content"
        style={{
          margin: "10px auto",
          display: "block",
          padding: "10px",
        }}
      />{" "}
      <input
        required
        className="input"
        id="file"
        type="file"
        onChange={fileUpload}
        style={{
          margin: "10px 36%",
          display: "block",
          padding: "10px",
        }}
      />
      <button onClick={() => addPost()} className="button">
        add post
      </button>
    </div>
  );
}
