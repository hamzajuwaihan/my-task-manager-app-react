import { useState } from "react";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";

import ConfirmationModalPresentation from "../components/ConfirmationModalPresentation";
import { deleteTaskAsync } from "../features/taskSlice";

const ConfirmationModalContainer = ({ taskId }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const deleteTaskHandler = (id) => {
    dispatch(deleteTaskAsync(id))
      .then(() => {
        handleClose(); // Close the modal after successful deletion
      })
      .catch((error) => {
        // Handle errors if needed
        console.error("Error deleting task:", error);
      });
  };

  return (
    <>
      <ConfirmationModalPresentation
        openHandler={handleOpen}
        closeHandler={handleClose}
        status={open}
        deleteTaskHandler={deleteTaskHandler}
        taskId={taskId}
      />
    </>
  );
};

ConfirmationModalContainer.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default ConfirmationModalContainer;
