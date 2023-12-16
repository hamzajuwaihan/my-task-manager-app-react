import {
  Box,
  FormLabel,
  Button,
  TextField,
  MenuItem,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PropTypes from "prop-types";

const AddTaskFormPresentation = ({
  onChange,
  formData,
  onSubmit,
  dueDate,
  onDateChange,
  snackBarStatus,
  snackBarStatusHandler,
}) => {

  return (
    <Box
      m={5}
      sx={{
        width: {
          xs: "80%",
          sm: "50%",
        },
        margin: "auto",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Add a new task
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          margin="normal"
          label="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={onChange}
          id="title"
          required
          color="primary"
          size="small"
          fullWidth
        />
        <br />

        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={onChange}
          id="description"
          fullWidth
          margin="normal"
          multiline
        />
        <br />

        <MobileDateTimePicker
          label="Due Date *"
          name="dueDate"
          value={dueDate}
          onChange={onDateChange}
          sx={{
            width: "100%",
            marginTop: 1,
            marginBottom: 1,
          }}
        />
        <br />
        <br />
        <FormControl m={2} fullWidth>
          <FormLabel id="priority-group-label">Priority</FormLabel>
          <RadioGroup
            value={formData.priority}
            onChange={onChange}
            row
            name="priority"
            aria-labelledby="priority-group-label"
          >
            <FormControlLabel control={<Radio />} label="High" value={"high"} />
            <FormControlLabel
              control={<Radio />}
              value={"medium"}
              label="Medium"
            />
            <FormControlLabel control={<Radio />} value={"low"} label="Low" />
          </RadioGroup>
        </FormControl>
        <br />
        <TextField
          label="Category"
          id="category"
          type="text"
          name="category"
          value={formData.category}
          onChange={onChange}
          margin="normal"
          color="primary"
          fullWidth
          size="small"
        />

        <br />
        <TextField
          margin="normal"
          label="Type"
          id="type"
          type="text"
          name="type"
          value={formData.type}
          onChange={onChange}
          color="primary"
          size="small"
          fullWidth
        />
        <br />
        <TextField
          select
          name="status"
          value={formData.status}
          onChange={onChange}
          id="status"
          required
          fullWidth
          size="small"
          margin="normal"
          label="Status"
        >
          <MenuItem value="">Select Status</MenuItem>
          <MenuItem value="todo">To-Do</MenuItem>
          <MenuItem value="inProgress">In Progress</MenuItem>
          <MenuItem value="done">Done</MenuItem>
        </TextField>
        <br />

        <Button variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>
      <Snackbar
        open={snackBarStatus}
        autoHideDuration={6000}
        onClose={() => {
          snackBarStatusHandler(false);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={() => {
            snackBarStatusHandler(false);
          }}
          severity="success"
          sx={{ width: "100%" }}
          icon={
            <CheckCircleOutlineIcon fontSize="inherit" color="success" />
          }
        >
          Task was added successfully !
        </Alert>
      </Snackbar>
    </Box>
  );
};

AddTaskFormPresentation.propTypes = {
  onChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  dueDate: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
  snackBarStatus: PropTypes.bool.isRequired,
  snackBarStatusHandler: PropTypes.func.isRequired,
};

export default AddTaskFormPresentation;
