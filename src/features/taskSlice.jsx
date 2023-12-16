import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3000/tasks";
export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
});

export const addTask = createAsyncThunk("task/addTask", async (task) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
});

export const deleteTaskAsync = createAsyncThunk(
  "task/deleteTaskAsync",
  async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    return id;
  }
);
const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    status: "idle",
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "idle";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "error";
      })
      .addCase(addTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTask.fulfilled, (state) => {
        state.status = "idle";
        // state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state) => {
        state.status = "error";
      })
      .addCase(deleteTaskAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        console.log(action)
      })
      .addCase(deleteTaskAsync.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
