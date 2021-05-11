import React, { Fragment } from "react";
import xbox from "./img2/xbox.jpg";
import "../../styles/search-style.css";
import gamer from "./img2/gamer.jpg";
import drone from "./img2/drone.jpg";
import iphone from "./img2/iphone.jpg";

export default function SearchResult() {
  return (
    <Fragment>
      <div className="firstpost">
        <img className="xbox" src={xbox} alt="" />
        <h2>Adipisicing Laris Cupitatad Do</h2>
        <h6>Lee Rusel - November 3, 2012</h6>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          hendrerit dapibus dui ut facilisis. Integer placerat, leo nec
          tristique scelerisque, nisl nisi vulputate ligula, sit amet varius est
          quam ac leo. Curabitur scelerisque malesuada nunc, at vulputate nisl
          viverra ut. Etiam ultrices enim tortor, id facilisis leo feugiat id.
          Sed convallis lectus enim, quis finibus mauris aliquam quis. Nam
          facilisis et erat a commodo. Donec nec dui ligula. Nam varius aliquet
          neque nec rutrum. Mauris vitae feugiat augue, a viverra neque.
        </h4>
      </div>
      <div className="secondpost">
        <img className="gamer" src={gamer} alt="" />
        <h2>Sunt ea Aute Anim</h2>
        <h6>Victoria Wattson - March 2, 2014</h6>
        <h4>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          hendrerit dapibus dui ut facilisis. Integer placerat, leo nec
          tristique scelerisque, nisl nisi vulputate ligula, sit amet varius est
          quam ac leo. Curabitur scelerisque malesuada nunc, at vulputate nisl
          viverra ut. Etiam ultrices enim tortor, id facilisis leo feugiat id.
          Sed convallis lectus enim, quis finibus mauris aliquam quis. Nam
          facilisis et erat a commodo. Donec nec dui ligula. Nam varius aliquet
          neque nec rutrum. Mauris vitae feugiat augue, a viverra neque.
        </h4>
      </div>
      <div className="thirdpost">
        <img className="drone" src={drone} alt="" />
        <h2>Consectetur Esse exercitiation</h2>
        <h6>Ronald Hawkings - December 25, 2019</h6>
        <h4>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          hendrerit dapibus dui ut facilisis. Integer placerat, leo nec
          tristique scelerisque, nisl nisi vulputate ligula, sit amet varius est
          quam ac leo. Curabitur scelerisque malesuada nunc, at vulputate nisl
          viverra ut. Etiam ultrices enim tortor, id facilisis leo feugiat id.
          Sed convallis lectus enim, quis finibus mauris aliquam quis. Nam
          facilisis et erat a commodo. Donec nec dui ligula. Nam varius aliquet
          neque nec rutrum. Mauris vitae feugiat augue, a viverra neque.
        </h4>
      </div>
      <div className="fourthpost">
        <img className="iphone" src={iphone} alt="" />
        <h2>Occeant Quis Adispisicing</h2>
        <h6> Mitchel Bell - August 29, 2016</h6>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          hendrerit dapibus dui ut facilisis. Integer placerat, leo nec
          tristique scelerisque, nisl nisi vulputate ligula, sit amet varius est
          quam ac leo. Curabitur scelerisque malesuada nunc, at vulputate nisl
          viverra ut. Etiam ultrices enim tortor, id facilisis leo feugiat id.
          Sed convallis lectus enim, quis finibus mauris aliquam quis. Nam
          facilisis et erat a commodo. Donec nec dui ligula. Nam varius aliquet
          neque nec rutrum. Mauris vitae feugiat augue, a viverra neque.
        </h4>
      </div>
    </Fragment>
  );
}
