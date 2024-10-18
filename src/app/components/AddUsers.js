'use client'
import React, { useState } from 'react'
import { addUser } from '../redux/slice'
import { useDispatch } from 'react-redux'
import Link from 'next/link'





const AddUsers = () => {
    const [name, setName] = useState("")
    
    const dispatch = useDispatch();
    const userDispatch = () => {
        // console.log(name)
        dispatch(addUser(name))
    }

    return (
        <div className='add-user'>
            <h1>User list</h1>
            <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Add user' />
            <button onClick={userDispatch}>Add Users</button>
            <br />
            <Link style={{marginTop:20}} href="/removeUser">removeUser</Link><br />
            <Link href="/todolist">Go to todo page</Link><br/>
            <Link href="/apiusers">Go to api users</Link>
        </div>
    )
}

export default AddUsers
