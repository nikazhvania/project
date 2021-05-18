import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import SearchInput from "../Search/Search";
import HeaderInput from "./headerInput";
import { useParams } from "react-router";
function Header() {
  const [searchCheck, setSearchCheck] = useState(false);
  const { keyword } = useParams();
  function Search() {
    if (searchCheck == false) {
      setSearchCheck(true);
      document.getElementById("input").style.display = "contents";
      document.getElementById("button").style.display = "contents";
      document.getElementById("header").style.gridTemplateColumns =
        "150px auto 300px 136px";
    } else if (searchCheck == true) {
      setSearchCheck(false);
      document.getElementById("input").style.display = "none";
      document.getElementById("header").style.gridTemplateColumns =
        "150px auto 60px 136px";
    }
  }
  return (
    <header id="header">
      <a style={{ display: "flex" }} href="/">
        {" "}
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
            alt=""
          />
        </div>{" "}
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/search">Tags</a>
          </li>
          <li>
            <a href="/Registration">Register</a>
          </li>
        </ul>
      </nav>
      <div className="search">
        <div style={{ display: "none" }} id="input">
          <HeaderInput value={keyword} />
        </div>
        <button id="button" onClick={() => Search()}>
          <img
            style={{ float: "left" }}
            src={`${process.env.PUBLIC_URL}/assets/images/search.svg`}
            alt=""
          />
        </button>
      </div>
      <div className="login">
        <a href="/login" style={{ display: "flex" }}>
          {" "}
          <button>ავტორიზაცია</button>{" "}
        </a>
      </div>
    </header>
  );
}

export default Header;
