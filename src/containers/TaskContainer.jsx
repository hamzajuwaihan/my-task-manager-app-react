import { useSelector, useDispatch } from "react-redux";
import Task from "../components/Task";
import { useEffect } from "react";
import { fetchTasks } from "../features/taskSlice";
import { Grid } from "@mui/material";

const TaskContainer = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());

    console.log("effect was called");
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {tasks.map((task) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={task.id} sx={
            {
                padding: "30px"
            }
          }>
            <Task task={task} key={task.id} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TaskContainer;
