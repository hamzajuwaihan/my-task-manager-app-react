
import { useSelector } from "react-redux";
import Task from "../components/Task";

const TaskContainer = ()=>{

    const tasks = useSelector((state)=>state.task);
    

    return  tasks.map((task)=>{

        return <Task task={task} key={task.id}/>;
    }) 
}

export default TaskContainer;