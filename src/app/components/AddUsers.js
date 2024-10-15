'use client'
import React, { useState } from 'react'
import { addUsers } from '../redux/slice'
import { useDispatch } from 'react-redux'


const AddUsers = () => {
    const [name, setName] = useState("")
    // const dispatch = userDispatch();
    const dispatch = useDispatch()
    const userDispatch = () => {
        console.log(name)
        dispatch(addUsers(name))
    }

    return (
        <div className='add-user'>
            <h1>User list</h1>
            <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Add user' />
            <button onClick={userDispatch}>Add Users</button>
        </div>
    )
}

export default AddUsers
