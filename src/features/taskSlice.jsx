import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const taskSlice = createSlice({
    name: "task",
    initialState:  [{
            taskInfo: "hello",
            id: uuidv4()
        }],
    reducers:{
        addTask: (state,action)=>{
            const newTask ={
                id: uuidv4(),
                ...action.payload
            }
            state.push(newTask);
        }
    }
})

export const {addTask} = taskSlice.actions;

export default taskSlice.reducer;