import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from './taskSlice';

const store = configureStore({
    reducer:{
        task: TaskReducer
    }
})

export default store;