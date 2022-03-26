import "./App.css";
import React from "react";
import Array from "./Components/Props"
import {useState}  from "react"
import H1 from "./Components/H1";

const initialState = []
// const arr = [
//   {
//     name: "alex",
//     age: 17
//   },
//   {
//     name: "john",
//     age: 12
//   }
// ]
function App() {
//    return  <Array arr={arr} />
    const [count, setCount] = useState(0)
  
    return <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count * count)}>double</button>
      <button onClick={() => setCount(count * 0)}>anew</button>
    </div>
     

  // const[text, setText] = useState("")
  // const[todos, setTodos] = useState(initialState)
  
  // const handleChange = (e) => {
  //   setText(e.target.value)
  // }
  // const addTodo = () =>{   
  //   if(text == ""){
  //     return
  //   }
  //   setTodos(function(prev){
  //     let newTodo = {
  //       text:text,
  //       isCompleted:false
  //     }
  //     return [...prev, newTodo]
  //   })
  //   setText("")
    
  // }
  // const Completed = (index) => {
  //   const copy = [...todos]
  //   copy[index].isCompleted = copy[index].isCompleted ? false : true
  //   setTodos(copy)
  // }
  // const Delate = (index) => {
  // const copy = [...todos]
  // copy.splice(index, 1)
  // setTodos(copy)
  // }
  
 
  //  return (
  //    <>
  //    <div className="app">
  //     <H1 text="Todo App" />
  //    <div>
  //      <div className="todo-list">
  //        {todos.map((elem, index ) => {
  //          return(
  //            <div className="todo" key={index}>
  //              <p style={elem.isCompleted ? { textDecoration: "line-through"}:{}}>
  //              {elem.text}
  //              </p>
  //              <button onClick={() => Completed(index)}>Completed</button>
  //              <button onClick={() => Delate(index)}>Delate</button>
  //            </div>
  //          )
  //        })}
  //        <input onChange={handleChange} value={text}/>
  //        <button onClick={addTodo}>Add</button>
  //      </div>
  //    </div>
  //    </div>
  //    </>
  //  )
}
export default App;
