import React from "react";
import Image from "./images/img.png";
import "./App.css"
import image from "./images/IMAGE.png";
import img2 from "./images/Vector (1).png"
import img3 from "./images/IMAGE (3).png"
import img4 from "./images/IMAGE (4).png"
import img5 from "./images/IMAGE (5).png"    
import img6 from "./images/IMAGE (6).png"
import img7 from "./images/Rectangle-3.png"
import img8 from "./images/IMAGE (7).png"
import img9 from "./images/IMAGE (8).png"
import img10 from "./images/IMAGE (9).png"
import img11 from "./images/IMAGE (10).png"
import img12 from "./images/Screenshot_61.png"


function App() {
return(
 <div className="container">
      <img className="img" src={Image} alt="" />
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
  <div className="text1">
    <h1>Accessible way to <br/> start your business</h1>
    <p className="p1">Simple. Customizable. Stylish.</p>
    <button className="button">Get demo for free</button>
    <p className="p2">watch full video</p>
  </div>
  <div className="footer">
    <img className="img3" src={image} alt="" />
    <img className="img3" src={img2} alt="" />
    <img className="img3" src={image} alt="" />
    <img className="img3" src={img2} alt="" />
  </div>
  <div className="hedear">
    <img className="img4" src={img3} alt="" />
    <div className="glavniy">
      <p className="p4">since 2019</p>
      <p className="p3">In numbers</p>
    </div>
  </div>
  <div className="thirsdiv">
    <div className="div1">
      <p className="p5">Happy clients</p>
      <h1 className="h2">1000+</h1>
      <p className="p6">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut fringilla interdum aliquet.</p>
    </div>
    <div className="div1">
      <h1 className="h3">20+</h1>
      <p className="p5">Products created</p>
      <p className="p6">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut fringilla interdum aliquet.</p>
    </div>
    <div className="div1">
      <p className="p5">Investments received</p>
      <h1 className="h4">$5M+</h1>
      <p className="p6">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut fringilla interdum aliquet.</p>
    </div>
    </div>
    <div className="header2">
      <div className="mini-header">
        <h1>Get to know our <br /> main features</h1>
    <button className="button2">Buy now</button>
      </div>
      <div className="mini-header2">
      <img className="img5" src={img4} alt="" />
      <img className="img6" src={img5} alt="" />
      <img className="img7" src={img6} alt="" />
      </div>
      <div className="miniheader3">
     <div>
       <p className="p7">Simple</p>
       <p className="p8">Here you will not find complex <br /> technological solutions that will <br /> baffle you.</p>
       <p>Save your resources on <br/> development</p>
       <p>Easy to understand</p>
       <p>User friendly</p>
     </div>
     <div>
       <p className="p7">Customizable</p>
       <p className="p8">You can reuse blocks and individual <br /> elements to create something <br /> unique on your website.</p>
       <p className="p9">Reuse the sections and create <br /> your own style</p>
       <p className="p9">Save your time</p>
       <p className="p9">Save your resources on <br /> development</p>
       <p className="p9">Unique design</p>
     </div>
     <div>
       <p className="p7">Stylish</p>
       <p className="p8">Right and without unnecessary <br/> tinsel, just scroll through this <br /> template and you will see.</p>
       <p className="p9">Unique design</p>
       <p className="p9">Unforgettable 3D elements and <br /> trendy glass-effect</p>
       <p className="p9">Design that drives an industry</p>
     </div>
      </div>
    </div>
      <p className="p10">Watch video to <br /> discover advantages</p>
      <img className="img8" src={img7} alt="" />
      <p className="p11">No need to know <br /> any technologies</p>

      <div className="header4">
       <img className="img9" src={img8} alt="" />
       <div className="miniheader4">
         <h1>Easy to understand</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut fringilla interdum <br /> aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. <br />
             Aliquam at elit at diam congue aliquam at eu felis. Vestibulum sed massa <br /> bibendum, porta ex consectetur,
              commodo tellus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut fringilla interdum <br /> aliquet. Nulla viverra quam 
            sit amet lacus accumsan, ac interdum nibh eleifend. <br />
             Aliquam at elit at diam congue aliquam at eu felis.</p>
             <p className="p13">learn more</p>
       </div>
      </div>
      <p className="p12">Reuse the sections</p>
    <div className="header5">
      <div>
        <h1>Easy to change</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum <br /> aliquet.
           Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. <br />
           Aliquam at elit at diam congue aliquam at eu felis.
           Vestibulum sed massa bibendum, porta ex consectetur, commodo tellus.</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum <br /> aliquet.
              Nulla viverrum nibh eleifend. <br />
              Aliquam at elit at diam congue aliquam at eu felis.</p>
              <p className="kak">learn more</p>
      </div>
      <img src={img9} alt="" />
    </div>
    <div className="header6">
      <div className="asd">
        <h1>Price plans</h1>
      </div>
      <div className="miniheader4">
        <img className="img10" src={img10} alt="" />
        <img className="img11" src={img11} alt="" />
      </div>
      <div className="miniheader5">
      <div>
        <p className="p14">Basic</p>
        <p className="p15">Free 30-days trial period</p>
        <p className="p15">Professional design and guidelines for customization</p>
        <p className="p15">Unlimited amount of pages to change</p>
        <p className="p15">24/7 technical support</p>
        <p className="p15">Advenced security components</p>
        <div className="fgh">
         <h1>$29</h1>
        <button className="button2">Buy now</button>
        </div>
        
      </div>
      <div>
        <p className="p14">Pro</p>
        <p className="p15">Free 30-days trial period</p>
        <p className="p15">Professional design and guidelines for customization</p>
        <p className="p15">Unlimited amount of pages to change</p>
        <p className="p15">24/7 technical support</p>
        <p className="p15">Advenced security components</p>
        <div className="qwe">
           <h1>$39</h1>
        <button className="button2">Buy now</button>
        </div>
      </div>
      </div>
    </div>
    <div className="header10">
          <img className="img15" src={img12} alt="" />
    </div>
 </div>
)

}

export default App;