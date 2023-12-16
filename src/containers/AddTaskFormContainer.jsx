import { useState } from "react";
import AddTaskFormPresentation from "../components/AddTaskFormPresentation";
import { addTask } from "../features/taskSlice";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const AddTaskFormContainer = ()=>{

    const dispatch = useDispatch();

    const [formInputs, setFormInputs] = useState({
        title: "",
        id: uuidv4(),
        description: "",
        dueDate: "",
        priority:"",
        category:"",
        type:"",
        status:""
    });
    const handleChange = ({target})=>{

        setFormInputs((prevState)=>{
            return {
                ...prevState,
                [target.name]: target.value
            }
        })
    }
    const [snackBarStatus, setSnackBarStatus] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(
        addTask({
            ...formInputs,
            id: uuidv4()
       }))
        setFormInputs({
            title: "",
            description: "",
            dueDate: "",
            priority:"",
            category:"",
            type:"",
            status:""
        })
        setSnackBarStatus(true);
    }
    const [dueDate, setDueDate] = useState(new Date());
   
    const handleDateChange = (newDate) => {
        setDueDate(newDate);
        setFormInputs((prevState)=>{
            return {
                ...prevState,
                dueDate: newDate
            }
        
    });
    };
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AddTaskFormPresentation onChange= {handleChange} formData={formInputs} onSubmit={handleSubmit} dueDate={dueDate} onDateChange={handleDateChange} snackBarStatus={snackBarStatus} snackBarStatusHandler={setSnackBarStatus}/>
        </LocalizationProvider>
        </>
    )

}
export default AddTaskFormContainer;