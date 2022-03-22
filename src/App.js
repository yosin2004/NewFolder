import "./App.css";
import "./pre.css";
import "./w3.css";
import La from "./images/la.jpg";
import Bandmember from "./images/bandmember.jpg";
import Chicago from "./images/chicago.jpg";
import Map from "./images/map.jpg";
import Newyork from "./images/newyork.jpg";
import Ny from "./images/ny.jpg";
import Paris from "./images/paris.jpg";
import Sanfran from "./images/sanfran.jpg";
import Navbar from "./Components/Navbar";
import Conteiner from "./Components/Container";
import Image from "./Components/Image";
import Mini from "./Components/Mini";
import Hama from "./Components/Hama";
import Sada from "./Components/Sada";
import Anaha from "./Components/anaha";
import Pako from "./Components/pako";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      {/* Navbar  */}
      <Navbar/>
 

       <Conteiner />
       <Image/>
        <Mini/>
        {/* The Band Section  */}
        <Hama/>
       

        {/* The Tour Section  */}
         <Sada/>
       

        {/* Ticket Modal  */}
       <Annaha/>
        {/* The Contact Section  */}
        <Pako/>
        {/* End Page Content  */}
 

      {/* Image of location/map  */}
      <img src={Map} className="w3-image w3-greyscale-min" alt="map" style={{ width: "100%" }}/>

     <Footer/>
    </>
  );
}

export default App;
