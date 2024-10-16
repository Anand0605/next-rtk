"use client"
import React from 'react'
import '../page.module.css'
import { useSelector } from 'react-redux'

const DisplayUsers = () => {

  const userData = useSelector((data) => data.users)
  console.log(userData)
  return (
    <div className='display-user'>
      <h1>User List</h1>
      {
        userData.map((item) => (
          <h1>{item.name}</h1>
        ))
      }
    </div>
  )
}

export default DisplayUsers
