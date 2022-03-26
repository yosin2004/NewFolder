import { useState } from "react";

const aval =0
function Couter(){
     const [count, setCount] = useState(" ")
  
     return (<div>
     couter <br/>
     <button onClick={()=> setCount(count + 1)}>+</button><br/>
     <button onClick={()=> setCount(aval)}>nol</button><br/>
     <button onClick={()=> setCount(count - 1)}>-</button><br/>
     <button onClick={()=> setCount(count * count)}>dobl</button><br/>
     {count}
     </div>)
}
export default Couter