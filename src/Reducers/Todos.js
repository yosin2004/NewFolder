import { createSlice } from "@reduxjs/toolkit";



export const slice = createSlice({
    name: "todos",
    initialState,
    reducers: {
       text: "",
       todos: []
    },
    reducer: {
        hendleChange: (state, actions) => {
            state.text = actions.payload
        },
      addTodo: (state) => {
        state.todos.push({
            text: state.text,
            isCompleted: false
        })
      },
      deleteTodo: (state, actions) => {
          state.todos.filter((index) => index !== actions.payload)
      },
      completedTodo: (state, actions) =>  {
          state.todos[actions.payload.index].isCompleted = actions.payload.check 
      }
    },
})

export const {addTodo , handleChange , deleteTodo, completedTodo}  = slice.actions

export default slice.reducer