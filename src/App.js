import { firestore } from "./firebase/firebase.config";
import { useState, useEffect } from "react";
function App() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    getTest();
  }, []);

  const getTest = async () => {
    await firestore
      .collection("test")
      .get()
      .then((querySnapshot) => {
        setTest(
          querySnapshot.docs.map((item) => ({
            ...item.data(),
            id: item.id,
          }))
        );
      });
  };
  return <>{console.log(test)}</>;
}

export default App;
