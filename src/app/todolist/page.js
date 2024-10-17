'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodos } from '../redux/todoSlice'

const page = () => {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch();
    const todosData = useSelector((data)=>data.todoData.users)
    // console.log(todoData)

    // const addTodos=()=>{

    // }
  return (
    <div>
      <h1>Add Todo</h1><br/>
      <input onChange={(e)=>setTodo(e.target.value)} type='text' placeholder='add new task'/>
      <button onClick={()=>dispatch(addTodos(todo))}>Add todo</button>
      <br/>
      <h2>Todo List</h2>
      {
        todosData.length && todosData.map((item)=>(
            <h3>{item.name}</h3>
        ))
      }
    </div>
  )
}

export default page
