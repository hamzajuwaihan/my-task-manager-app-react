import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import ConfirmationModalContainer from "../containers/ConfirmationModalContainer";

const Task = ({ task }) => {
 

  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          height: 400,
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {task.title}
          </Typography>
          <Divider />
          <Typography variant="body1" gutterBottom>
            {task.description}
          </Typography>
          <Stack>
            <Typography variant="body2" gutterBottom>
              Due Date:
             
            </Typography>
            <Chip
                label={task.dueDate}
                color="warning"
                size="small"
                sx={{
                  marginLeft: "5px",
                }}
              />
            <Typography variant="body2" gutterBottom>
              Status:
              
            </Typography>
            <Chip
                label={task.status}
                color={task.status === "Done" ? "success" : task.status === "in progress" ? "warning" : "info"}
                size="small"
                sx={{
                  marginLeft: "5px",
                }}
              />
          </Stack>
        </CardContent>
        <Divider />

        <CardActions>
          <ConfirmationModalContainer taskId={task.id} />
        </CardActions>
      </Card>
    </>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
