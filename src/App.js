import "./App.css";
import {useState}  from "react"
import H1 from "./Components/H1";

const initialState = []

function App() {
  const[text, setText] = useState("")
  const[todos, setTodos] = useState(initialState)
  
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const addTodo = () =>{   
    if(text == ""){
      return
    }
    setTodos(function(prev){
      let newTodo = {
        text:text,
        isCompleted:false
      }
      return [...prev, newTodo]
    })
    setText("")
    
  }
  const remove = () => {

  }
  function hello(props){
    return<h1>Kak ti tam, {props.name}</h1>
  }
  console.log(hello)

   return (
     <>
     <div className="app">
      <H1 text="Todo App" />
     <div>
       <div className="todo-list">
         {todos.map((elem, index ) => {
           return(
             <div className="todo" key={index}>
               {elem.text}
               <button onClick={remove}>Remove</button>e'
             </div>
           )
         })}
         <input onChange={handleChange} value={text}/>
         <button onClick={addTodo}>Add</button>
       </div>
     </div>
     </div>
     </>
   )
}
export default App;
