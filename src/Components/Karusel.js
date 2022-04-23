import React from 'react'
import "antd/dist/antd.css"
import { Carousel } from 'antd';
import img from "../nnn.jpg"
import img2 from "../Без названия (6).jpg"
import img3 from "../Без названия (7).jpg"
import img4 from "../Без названия (8).jpg"

function Karusel() {
    const contentStyle = {
        height: '100%',
        color: '#fff',
        lineHeight: '560px',
        textAlign: 'start',
        background: '#364d79',
      };
  return (
    <>
    <div className="container">
    <Carousel autoplay>
    <div>
      <img style={contentStyle} src={img} alt="" />
    </div>
    <div>
     <img style={contentStyle} src={img2} alt="" />
    </div>
    <div>
      <img style={contentStyle} src={img3} alt="" />
    </div>
    <div>
      <img style={contentStyle} src={img4} alt="" />
    </div>
  </Carousel>
  </div>
    </>
  )
}

export default Karusel