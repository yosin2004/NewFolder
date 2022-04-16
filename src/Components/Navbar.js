import React from 'react'
import image from "../images/IMAGE.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
     <img  className="img2" src={image} alt=""/>
     <ul>
       <li>About</li>
       <li>Features</li>
       <li>Pricing</li>
       <li>FAQ</li>
       <li>Feedback</li>
       <li>Blog</li>
       <li>Contact</li>
     </ul>
  </div>
    </>
  )
}

export default Navbar