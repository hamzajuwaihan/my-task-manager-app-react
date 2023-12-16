import { Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import ConfirmationModalContainer from "../containers/ConfirmationModalContainer";

const Task = ({task})=>{

    return (
        <Stack direction={"row"} spacing={2} alignItems="center">

            <Typography variant="h6" gutterBottom>{task.title}</Typography>
            <ConfirmationModalContainer taskId={task.id}/>
            
        </Stack>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
     
    }).isRequired
  };

export default Task;