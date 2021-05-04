import React from "react";
import "./style.scss";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="" />
      </div>
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
        <button>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/search.svg`}
            alt=""
          />
        </button>
      </div>
      <div className="login">
        <button>ავტორიზაცია</button>
      </div>
    </header>
  );
}

export default Header;
