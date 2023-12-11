import { Box } from "@mui/material";
import PropTypes from "prop-types";

const AddTaskFormPresentation = ({ onChange, formData, onSubmit }) => {
  return (
    <Box m={5}>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">
          Title:
          <br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label htmlFor="description">
          Description:
          <br />
          <textarea
            name="description"
            value={formData.description}
            onChange={onChange}
          ></textarea>
        </label>
        <br />
        <label htmlFor="dueDate">
          Due Date:
          <br />
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label htmlFor="priority">
          Priority:
          <br />
          <select
            name="priority"
            value={formData.priority}
            onChange={onChange}
            required
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        <br />
        <label htmlFor="category">
          Category:
          <br />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={onChange}
          />
        </label>
        <br />
        <label htmlFor="type">
          Type:
          <br />
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={onChange}
          />
        </label>
        <br />
        <label htmlFor="status">
          Status:
          <br />
          <select name="status" value={formData.status} onChange={onChange} required>
            <option value="">Select Status</option>
            <option value="todo">To-Do</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

AddTaskFormPresentation.propTypes = {
  onChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddTaskFormPresentation;
