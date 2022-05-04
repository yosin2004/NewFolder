import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Reducers/Counter"
import todosReducer from "../Reducers/Todos"

export const store = configureStore({
    reducer: { 
      counter: counterReducer, 
      todos: todosReducer
    },
  })

  