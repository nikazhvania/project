import SearchInput from "../../components/Search/Search";
import "../../styles/search-style.scss";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase.config";
import { useParams } from "react-router";
export default function SearchPage() {
  const [tags, setTags] = useState([]);
  const history = useHistory();
  const { keyword } = useParams();
  const getTags = async () => {
    await firestore
      .collection("tags")
      .get()
      .then((querySnapshot) => {
        setTags(
          querySnapshot.docs.map((item) => ({
            ...item.data(),
            id: item.id,
          }))
        );
      });
  };

  useEffect(() => {
    console.log("test");
    getTags();
  }, []);

  const TagResult = (key) => {
    history.push(`/search/${key}`);
  };

  return (
    <div className="main">
      <SearchInput />
      <div className="Tag-row">
        {tags.map((item) => {
          return (
            item && (
              <>
                <button onClick={() => TagResult(item.tag)} className="Tag1">
                  {"#" + item.tag}
                </button>
              </>
            )
          );
        })}
      </div>
    </div>
  );
}
