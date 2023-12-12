import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const taskSlice = createSlice({
  name: "task",
  initialState: [
    {
      id: "465fd5cf-3210-4c5b-8fb3-b1ceba08ae55",
      title: "dsadsa",
      description: "dsadsa",
      dueDate: "2023-12-05",
      priority: "high",
      category: "",
      type: "",
      status: "todo",
    },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        ...action.payload,
      };
      state.push(newTask);
    },
    deleteTask: (state,action)=>{
        return state.filter((task)=>{
            return task.id !== action.payload.id
        })
    }
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
