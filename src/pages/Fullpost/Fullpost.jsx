import { useParams } from "react-router";
import { firestore } from "../../firebase/firebase.config";
import { useEffect, useState } from "react";
export default function Fullpost() {
  const { postId, keyword } = useParams();
  const [postinfo, setPostinfo] = useState([]);
  const fetchSinglePost = async () => {
    await firestore
      .collection("articles")
      .doc(postId)
      .get()
      .then((doc) => {
        setPostinfo(doc.data());
      });
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <div className="main" style={{ width: "100%", margin: "auto" }}>
      <a
        href={`/search/${keyword}`}
        style={{ color: "black", fontSize: "20px", marginBottom: "30px" }}
      >
        Go back
      </a>
      <div style={{ width: "100%", height: "450px", display: "block" }}>
        <img
          src={postinfo.image}
          style={{ width: "87%", height: "450px", display: "block" }}
        />
      </div>
      <h2
        style={{
          width: "600px",
          textAlign: "center",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        {postinfo.title}
      </h2>
      <div
        style={{
          width: "400px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <p style={{ color: "grey" }}>{postinfo.author}</p>
        <p style={{ color: "grey" }}>{postinfo.date}</p>
      </div>
      <p
        style={{
          marginTop: "15px",
          margin: "auto",
          textAlign: "center",
          display: "block",
          color: "grey",
        }}
      >
        {postinfo.about}
      </p>
      <p style={{ marginTop: "30px", fontSize: "20px" }}>{postinfo.content}</p>
    </div>
  );
}
