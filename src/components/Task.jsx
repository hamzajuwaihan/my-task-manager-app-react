import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Task = ({task})=>{

    return (
        <>
            <Typography>{task.taskInfo}</Typography>
        </>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
      taskInfo: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired,
  };

export default Task;