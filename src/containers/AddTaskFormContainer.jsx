import { useState } from "react";
import AddTaskFormPresentation from "../components/AddTaskFormPresentation";
import { addTask } from "../features/taskSlice";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const AddTaskFormContainer = ()=>{

    const dispatch = useDispatch();
    const [dueDate, setDueDate] = useState(new Date());
    const [formInputs, setFormInputs] = useState({
        title: "",
        id: uuidv4(),
        description: "",
        dueDate: dueDate,
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
        const date = new Date(formInputs.dueDate);
        dispatch(
        addTask({
            ...formInputs,
            dueDate: date.toISOString(),
            id: uuidv4()
       }))
       const defaultDueDate = new Date();
        setFormInputs({
            title: "",
            description: "",
            dueDate: defaultDueDate.toISOString(),
            priority:"",
            category:"",
            type:"",
            status:""
        })
        setSnackBarStatus(true);
    }
 
   
    const handleDateChange = (newDate) => {
        const date = new Date(newDate);
        setDueDate(date);
        setFormInputs((prevState)=>{
            return {
                ...prevState,
                dueDate: date.toISOString()
            }
        
    })
    
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