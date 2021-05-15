import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import SearchInput from "../../components/Search/Search";
import { firestore } from "../../firebase/firebase.config";

function SearchResult() {
  const { keyword } = useParams();

  const [data, setData] = useState([]);

  console.log("rendered");

  useEffect(() => {
    firestore
      .collection("technology")
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
  return (
    <div>
      <SearchInput value={keyword} />
      {data.map((item) => {
        return (
          item && (
            <>
              <p>{item.title}</p>
            </>
          )
        );
      })}
    </div>
  );
}

export default SearchResult;
