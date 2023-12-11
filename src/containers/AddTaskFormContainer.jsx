import { useState } from "react";
import AddTaskFormPresentation from "../components/AddTaskFormPresentation";
import { addTask } from "../features/taskSlice";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";

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
    }

    return (
        <>
        <AddTaskFormPresentation onChange= {handleChange} formData={formInputs} onSubmit={handleSubmit}/>
        </>
    )

}
export default AddTaskFormContainer;