import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Header() {
  return (
    <header>
      <a style={{ display: "flex" }} href="/ ">
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
            <a href="#">Nav Item</a>
          </li>
          <li>
            <a href="#">Nav Item</a>
          </li>
          <li>
            <a href="#">Nav Item</a>
          </li>
          <li>
            <a href="/SearchPage">Search</a>
          </li>
        </ul>
      </nav>
      <div className="search">
        <Link to="/search">
          <button>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/search.svg`}
              alt=""
            />
          </button>
        </Link>
      </div>
      <div className="login">
        <a href="/Registration" style={{ display: "flex" }}>
          {" "}
          <button>ავტორიზაცია</button>{" "}
        </a>
      </div>
    </header>
  );
}

export default Header;
