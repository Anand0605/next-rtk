"use client"
import React from 'react'
import '../page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice'

const DisplayUsers = () => {

  const userData = useSelector((data) => data.usersData.users)
  const dispatch = useDispatch();
  console.log(userData)
  return (
    <div className='display-user'>
      <h1>User List</h1>
      {
        userData.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <button onClick={()=>dispatch(removeUser(item.id))} style={{marginLeft:20,marginTop:10}}>Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayUsers
