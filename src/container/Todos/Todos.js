import React from 'react'
import { useSelector } from 'react-redux'

function Todos(props) {
  const text = useSelector(({Todos}) => Todos.text)
  const todo = useSelector(({Todos}) => Todos.todo)
  return (
    <div>Todos</div>
  )
}

export default Todos