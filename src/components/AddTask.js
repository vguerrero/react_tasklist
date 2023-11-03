import "./AddTask.css";
import { useState } from "react";

export const AddTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    const handleReset = () => {
        setTaskValue("");
        setProgress(false);
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name:taskValue,
            completed:Boolean(progress)
        }
        console.log(task);
        setTasks([...tasks,task]);//destructuring usage
        handleReset();
    }

    return (
            <section className="addtask">
                <form onSubmit={handleSubmit}>
                    <input onChange={(e)=> setTaskValue(e.target.value)} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" value={taskValue}></input>
                    <select onChange={(event)=> setProgress(event.target.value)} value={progress}>
                        <option value="false">Pending</option>
                        <option value="true">Completed</option>
                    </select>
                    <span onClick={handleReset} className="reset">Reset</span>
                    <button type="submit">Add Task</button>
                    
                </form>
                <p>{taskValue.length}</p>
            </section>
    )
}
