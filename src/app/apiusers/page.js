// 'use client'
// import React, { useEffect } from 'react'
// import { fetchApiUsers } from '../redux/slice'
// import { useDispatch, useSelector } from 'react-redux'

// const page = () => {
//     const dispatch = useDispatch();
//     const apiUserData = useSelector((data)=>data.usersData.userAPIData

// )
//     // console.log(apiUserData)
//     useEffect(()=>{
//         dispatch(fetchApiUsers())
//     },[])
//   return (
//     <div>
//      <h1>user list from api</h1>
//      {/* <button onClick={()=>dispatch(fetchApiUsers())}>Load user</button> */}
//      {
//         apiUserData.length && apiUserData.map((item)=>{
//             <h4>{item.name}</h4>
//         })
//      }
//     </div>
//   )
// }

// export default page

'use client'
import React, { useEffect } from 'react'
import { fetchApiUsers } from '../redux/slice'
import { useDispatch, useSelector } from 'react-redux'

const Page = () => {
    const dispatch = useDispatch();
    const apiUserData = useSelector((state) => state.usersData.userAPIData);

    useEffect(() => {
        dispatch(fetchApiUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>User List from API</h1>
            {
                apiUserData.length > 0 ? (
                    apiUserData.map((item) => (
                        <h4 key={item.id}>{item.name}</h4>  // Ensure you have a unique key for each item
                    ))
                ) : (
                    <p>No users found</p>
                )
            }
        </div>
    );
}

export default Page;

