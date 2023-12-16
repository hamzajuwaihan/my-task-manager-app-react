import { useState } from "react";
import {PropTypes} from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";
import ConfirmationModalPresentation from "../components/ConfirmationModalPresentation";

const ConfirmationModalContainer = ({taskId})=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    
    const deleteTaskHandler = (id)=>{
        dispatch(deleteTask({
            id: id
        }));
    }

    return <>
        <ConfirmationModalPresentation openHandler={handleOpen} closeHandler={handleClose} status={open} deleteTaskHandler={deleteTaskHandler} taskId={taskId}/>
    </>
}

ConfirmationModalContainer.propTypes = {
    
    taskId: PropTypes.string.isRequired
}

export default ConfirmationModalContainer;
