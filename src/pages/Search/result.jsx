import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import SearchInput from "../../components/Search/Search";
import { firestore } from "../../firebase/firebase.config";
import { useHistory } from "react-router";
function SearchResult() {
  const { keyword } = useParams();
  const [data, setData] = useState([]);
  const history = useHistory();
  console.log("rendered");

  useEffect(() => {
    firestore
      .collection("articles")
      .get()
      .then((querySnapshot) => {
        setData(
          querySnapshot.docs.map((item) => {
            return (
              item
                .data()
                .title.toLowerCase()
                .includes(keyword.toLowerCase()) && { ...item.data() }
            );
          })
        );
      });
  }, [keyword]);
  const Fullpost = (id) => {
    history.push(`/fullpost/${id}`);
  };

  return (
    <div>
      <SearchInput value={keyword} />
      {data.map((item) => {
        return (
          item && (
            <>
              <div
                classname="post"
                style={{
                  width: "80%",
                  margin: "auto",
                  marginTop: "171px",
                  paddingBottom: "60px",
                }}
              >
                <img
                  src=""
                  style={{ float: "left", width: "237px", height: "177px" }}
                  alt="post image"
                />
                <div
                  classname="text"
                  style={{
                    marginLeft: "37px",
                    width: "calc(100% - 275px)",
                    float: "left",
                  }}
                >
                  <h3>{item.title}</h3>
                  <div style={{ marginTop: "15px" }} />
                  <b>{item.author}</b>
                  <b style={{ display: "inline-block", marginLeft: "15px" }}>
                    {item.date}
                  </b>
                  <b style={{ display: "inline-block", marginLeft: "15px" }}>
                    {item.about}
                  </b>
                  <div style={{ marginTop: "15px" }} />
                  <p>
                    {item.content.length > 250
                      ? `${item.content.substring(0, 350)}...`
                      : item.content}
                  </p>

                  <button
                    style={{ display: "inlineBlock" }}
                    onClick={() => Fullpost(item.id)}
                  >
                    მეტის ნახვა
                  </button>
                </div>
              </div>
            </>
          )
        );
      })}
    </div>
  );
}

export default SearchResult;
