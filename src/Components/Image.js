import React from "react";
import Ny from "../images/ny.jpg"
function Image(){
    return( <div
        className="mySlides w3-display-container w3-center"
        style={{ display: "block" }}
      >
        <img src={Ny} alt="ny" style={{ width: "100%" }} />
        <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3>New York</h3>
          <p>
            <b>The atmosphere in New York is lorem ipsum.</b>
          </p>
        </div>
      </div>)
}
export default Image