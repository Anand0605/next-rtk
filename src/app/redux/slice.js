const { createSlice,nanoid,current } = require("@reduxjs/toolkit");
const { default: AddUsers } = require("../components/AddUsers");

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || []
}

// if (typeof window !== "undefined") {
//     localStorage.removeItem("users");
// }

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUser:(state, action)=>{
            console.log(action)
            const data = {
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data)
            let userdata = JSON.stringify(current(state.users));
            localStorage.setItem("users",userdata)
            
        },
        removeUser:(state,action)=>{
            const data = state.users.filter((item)=>{
                return item.id!==action.payload
            })
            state.users = data
            localStorage.setItem("users", JSON.stringify(state.users));
        }
    }
})

export const {addUser,removeUser} = Slice.actions

export default  Slice.reducer