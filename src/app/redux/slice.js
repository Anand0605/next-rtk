const { createSlice,nanoid } = require("@reduxjs/toolkit");
const { default: AddUsers } = require("../components/AddUsers");

const initialState = {
     users:[]
}

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUsers:(state, action)=>{
            const data = {
                id:nanoid(),
                name:action.name
            }
            state.users.push(data)
        }
    }
})

export const {addUsers} = Slice.actions

export default  Slice.reducer