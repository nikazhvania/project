import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase.config";
import { useHistory } from "react-router";
import "../../styles/reset.css";
export default function Reset() {
  const history = useHistory();
  const { userId } = useParams();
  const [data, setData] = useState([]);
  const [emaill, setEmaill] = useState("");

  const getEmail = () => {
    if (emaill == data.email) {
      history.push(`/resetResult/${userId}`);
    } else if (emaill == data.username) {
      history.push(`/resetResult/${userId}`);
    } else {
      document.getElementById("error").style.display = "block";
    }
  };
  const getUser = async () => {
    await firestore
      .collection("Users")
      .doc(userId)
      .get()
      .then((doc) => {
        setData(doc.data());
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="reset-info">
      <h1>პაროლის შეცვლა</h1>
      <p>ჩაწერეთ მეილი ან მომხმარებლის სახელი</p>
      <input
        type="email"
        onChange={(e) => setEmaill(e.target.value)}
        placeholder="enter email or username"
      />
      <input
        type="submit"
        className="button"
        value="continue"
        onClick={() => getEmail()}
      />
      <div className="errormessege" id="error">
        <p>email or username incorrect</p>
      </div>
    </div>
  );
}
