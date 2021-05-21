import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase.config";
import "../../styles/profile-style.css";
export default function Profile() {
  const { userId } = useParams();
  const [data, setData] = useState([]);
  const fetchProfile = async () => {
    await firestore
      .collection("Users")
      .doc(userId)
      .get()
      .then((doc) => {
        setData(doc.data());
      });
  };

  useEffect(() => {
    fetchProfile();
    console.log(data.image, data.name);
  }, []);

  return (
    <div>
      <div className="profile-info">
        <img src={data.image} />
        <div className="text">
          <h1 style={{ textAlign: "center", marginTop: "15px" }}>
            {data.Firstname} {data.surname}
          </h1>
          <p style={{ colr: "grey", textAlign: "center" }}>@{data.username}</p>
          <p style={{ marginTop: "15px" }}>{data.description}</p>
        </div>
      </div>
      <img
        className="image"
        src={`${process.env.PUBLIC_URL}/assets/images/articleImage.svg`}
      />
      <div className="absolute">
        <div className="text1">
          <p style={{ color: "grey" }}>INTERIOR</p>
          <h1>Laborum Ullamco Sunt id ut Sunt</h1>
          <p>May 7, 2019 (10 mins read)</p>
          <p className="margin">
            Proident aliquip velit qui commodo officia qui consectetur dolor
            ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur.
            Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do
            enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla
            consequat velit magna.
          </p>
        </div>
      </div>
      <div className="posts">
        <div className="post">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/profileimg1.svg`}
          />
          <div className="text3">
            <p>NATURE</p>
            <h2>Tempor deserunt Sunt Qui</h2>
            <p>November 3, 2012</p>
            <p>
              Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla
              tempor aute reprehenderit ut dolore mollit nisi consequat
              excepteur ex officia pariatur irure.
            </p>
          </div>
        </div>
        <div className="clear" />
        <div className="post">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/profileimg2.svg`}
          />
          <div className="text3">
            <p>PLANTS</p>
            <h2>Occaecat Anim eu Qui</h2>
            <p>September 28, 2014</p>
            <p>
              Qui ipsum consectetur ad incididunt et aliquip exercitation
              laboris nisi reprehenderit. Et excepteur commodo esse enim ea
              aliqua officia reprehenderit.
            </p>
          </div>
        </div>
        <div className="clear" />
        <div className="post">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/profileimg3.svg`}
          />
          <div className="text3">
            <p>FOOD</p>
            <h2>Fugiat Incididunt Voluptate Consequat</h2>
            <p>June 13, 2012</p>
            <p>
              Qui ipsum consectetur ad incididunt et aliquip exercitation
              laboris nisi reprehenderit. Et excepteur commodo esse enim ea
              aliqua officia reprehenderit.
            </p>
          </div>
        </div>
        <div className="clear" />
        <div className="post">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/profileimg4.svg`}
          />
          <div className="text3">
            <p>COLORFUL</p>
            <h2>Occaecat Anim eu Qui</h2>
            <p>June 21, 2015</p>
            <p>
              Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do.
              Aliqua esse velit in excepteur esse qui voluptate laboris
              adipisicing qui irure elit amet excepteur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
