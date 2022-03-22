import React from "react";
import Chicago from "../images/chicago.jpg";

function Mini(){
    return( <div
        className="mySlides w3-display-container w3-center"
        style={{ display: "none" }}
      >
        <img src={Chicago} alt="chicago" style={{ width: "100%" }} />
        <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3>Chicago</h3>
          <p>
            <b>Thank you, Chicago - A night we won't forget.</b>
          </p>
        </div>
      </div>)
}
export default Mini