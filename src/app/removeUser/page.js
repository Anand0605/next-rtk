'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice'

const page = () => {
    const userData =useSelector((data)=>data.userData.users)
    const dispatch = useDispatch()
    console.log(userData)
  return (
    <div>
      <h1>Remove User</h1>
      {
        userData.map((item)=>(
            <div>
                <span>{item.name}</span>
                <button style={{marginLeft:20,marginTop:10}} onClick={()=>dispatch(removeUser(item.id))}>Remove</button>
            </div>
        ))
      }
    </div>
  )
}

export default page
