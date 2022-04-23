import React from 'react'
import { useState } from "react";
import "antd/dist/antd.css";
import { Button } from 'antd';

function Count() {
    const [count, setCount] = useState(0)    
    return(
      <>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)} type="primary">+</Button>
      <Button onClick={() => setCount(count - 1)} type="primary">-</Button>
      <Button onClick={() => setCount(0)} type="primary">asd</Button>
      </>
    )
  
}

export default Count