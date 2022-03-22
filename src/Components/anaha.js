import React from "react";


function Anaha(){
    return( <div id="ticketModal" className="w3-modal">
    <div className="w3-modal-content w3-animate-top w3-card-4">
      <header className="w3-container w3-teal w3-center w3-padding-32">
        <span className="w3-button w3-teal w3-xlarge w3-display-topright">
          ×
        </span>
        <h2 className="w3-wide">
          <i className="fa fa-suitcase w3-margin-right"></i>Tickets
        </h2>
      </header>
      <div className="w3-container">
        <p>
          <label>
            <i className="fa fa-shopping-cart"></i> Tickets, $15 per
            person
          </label>
        </p>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="How many?"
        />
        <p>
          <label>
            <i className="fa fa-user"></i> Send To
          </label>
        </p>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="Enter email"
        />
        <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">
          PAY <i className="fa fa-check"></i>
        </button>
        <button className="w3-button w3-red w3-section">
          Close <i className="fa fa-remove"></i>
        </button>
        <p className="w3-right">
          Need{" "}
          <a
            href="https://www.w3schools.com/w3css/tryw3css_templates_band.htm#"
            className="w3-text-blue"
          >
            help?
          </a>
        </p>
      </div>
    </div>
  </div>
)
}
export default Anaha