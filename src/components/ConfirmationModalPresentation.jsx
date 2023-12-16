import { Button, Typography, Modal, Stack}from "@mui/material";
import PropTypes from "prop-types";
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "400px",
    bgcolor: "#ffffff",
    border: "2px solid #000000",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    p: "4px",
};


const ConfirmationModalPresentation = ({ openHandler, closeHandler, status, deleteTaskHandler, taskId}) => {
    return (
        <div>
            <Button 
            variant="outlined"
            onClick={openHandler}
            color="error"
            endIcon={<DeleteIcon />}>
            Delete
            </Button>
            <Modal
                open={status}
                onClose={closeHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack sx={style} spacing={2} direction="column" >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to delete the task?
                    </Typography>
                    <Stack direction="row" spacing={2}>
                    <Button onClick={closeHandler} variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={()=>{
                        deleteTaskHandler(taskId);
                    }} color="error" variant="contained">
                        Yes !
                    </Button>
                    </Stack>
                </Stack>
            </Modal>
        </div>
    );
};

ConfirmationModalPresentation.propTypes = {
    openHandler: PropTypes.func.isRequired,
    closeHandler: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired,
    deleteTaskHandler: PropTypes.func.isRequired,
    taskId: PropTypes.string.isRequired
};

export default ConfirmationModalPresentation;
