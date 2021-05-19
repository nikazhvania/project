import { firestore, storage } from "../../firebase/firebase.config";
import { useState } from "react";
import "../../styles/add-post.css";
import { useHistory } from "react-router";
export default function AddPost() {
  const history = useHistory();
  const [inputvalue, setInputvalue] = useState("");
  const [image, setImage] = useState(null);
  const [imagename, setImagename] = useState("");
  const addPost = async () => {
    let title, tags, content, date;
    const storeRef = storage.ref();
    setImagename("Post Images/" + image.name);
    const fileRef = storeRef.child(imagename);
    await fileRef.put(image);
    tags = document.getElementById("tags").value;
    content = document.getElementById("content").value;
    title = document.getElementById("title").value;
    date = document.getElementById("date").value;
    await firestore
      .collection("articles")
      .add({
        tags: tags,
        content: content,
        title: title,
        date: date,
        name: imagename,
        desc: document.getElementById("content").value,
        image: await fileRef.getDownloadURL(""),
      })
      .then(() => {
        history.push(`/`);
      });
  };
  function handleTag(key) {
    if (inputvalue.includes(key)) {
      alert("Don't click the same tag twice");
    } else {
      setInputvalue(inputvalue + " " + key);
    }
  }
  const fileupload = (e) => {
    setImage(e.target.files[0]);
  };
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
        required="true"
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
        required="true"
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
      />
      <input
        id="file"
        required="true"
        onChange={fileupload}
        className="input"
        style={{ margin: "20px auto", display: "block", width: "200px" }}
        type="file"
      />
      <button onClick={() => addPost()} className="button">
        add post
      </button>
    </div>
  );
}
