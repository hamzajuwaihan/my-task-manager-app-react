import { Typography, Container } from "@mui/material";
import PropTypes from "prop-types";
import ConfirmationModalContainer from "../containers/ConfirmationModalContainer";

const Task = ({task})=>{

    return (
        <Container>

            <Typography>{task.title}</Typography>
            <ConfirmationModalContainer taskId={task.id}/>
            
        </Container>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
     
    }).isRequired
  };

export default Task;