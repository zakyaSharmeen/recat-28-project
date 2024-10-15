// the sore

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../store/slice/UserSlice" 

const store = configureStore({
    reducer: {
        users: userSlice,
    }
})


export default store