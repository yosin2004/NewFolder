import React from "react";

function Conteiner(){
    return( <div
        id="navDemo"
        className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
        style={{ marginTop: 46 }}
      >
        <a
          href="index.html#band"
          className="w3-bar-item w3-button w3-padding-large"
        >
          BAND
        </a>
        <a
          href="index.html#tour"
          className="w3-bar-item w3-button w3-padding-large"
        >
          TOUR
        </a>
        <a
          href="index.html#contact"
          className="w3-bar-item w3-button w3-padding-large"
        >
          CONTACT
        </a>
        <a
          href="index.html#"
          className="w3-bar-item w3-button w3-padding-large"
        >
          MERCH
        </a>
      </div>)
}
export default Conteiner