const { configureStore } = require("@reduxjs/toolkit");
import usersReducer from "./slice";
import todoReducer from "./slice"
export const store = configureStore({
    reducer:{
        usersData:usersReducer,
        todoData:todoReducer
    }
})