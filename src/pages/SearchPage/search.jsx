import React, { Fragment } from "react";
import "../../styles/search-style.css";
import Search from "./img/Search.svg";

export default function SearchPage() {
  return (
    <div className="main">
      <div className="imputform">
        <input
          className="Searchimput"
          placeholder="Find The Topics You Care About..."
        />
        <img className="lupa" src={Search} />
      </div>
      <div className="Tag-row">
        <a href="/SearchResult">
          <button className="Tag1">#technology</button>
        </a>
        <button className="Tag1">#lifeandlove</button>
        <button className="Tag1">#essentialism</button>
        <button className="Tag1">#webdevelopment</button>
        <button className="Tag1">#fashion</button>
        <button className="Tag1">#lifestyle</button>

        <button className="Tag1">#architecture</button>
        <button className="Tag1">#sports</button>
        <button className="Tag1">#entertainment</button>
        <button className="Tag1">#culinaryarts</button>
        <button className="Tag1">#travel</button>
        <button className="Tag1">#worldhistory</button>
        <button className="Tag1">#aeronautics</button>
        <button className="Tag1">#games</button>

        <button className="Tag1">#minimalism</button>
        <button className="Tag1">#finearts</button>
        <button className="Tag1">#graphicdesign</button>
        <button className="Tag1">#filmmaking</button>
        <button className="Tag1">#bitcoin</button>
        <button className="Tag1">#computers</button>
        <button className="Tag1">#machinelearning</button>
      </div>
    </div>
  );
}
