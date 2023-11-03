/*import React from 'react'
import { useState } from 'react'
import { CardTask } from './TaskCard'
import { BoxCard } from './BoxCard'
import "./taskList.css";

const TaskList = ({info}) => {

    

    const [tasks, settasks] = useState([
        {id:1,name:"wash up",completed:true},
        {id:2,name:"study angular",completed:false},
        {id:3,name:"learn node.js",completed:false},
        {id:4,name:"drink coofe",completed:true},
        {id:5,name:"learn aws",completed:false}
    ])

    const [show, setShow] = useState(true);

    function handleDelete(id){
        console.log("deleting: " + id + " task.");
        //va a setear la lista de tareas donde el id no sea el que se esta borrando.
        settasks(tasks.filter(t => t.id !== id));
    }

  return (
    <section className='tasklist'>
        <h1>Task List</h1>
        <ul>
            <button className="trigger" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
            { show && tasks.map((task) => (
               <CardTask info={info} key={task.id} task={task} handleDelete={handleDelete}/>
            )) 

            }
        </ul>

        <BoxCard result="success">
            <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing </p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia,</p>
        </BoxCard>

        

        <BoxCard result="warning">
            <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing </p>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, nihil perspiciatis!</p>
        </BoxCard>
      
    </section>
  )
}

export default TaskList
*/

import { useState } from 'react';
import { TaskCard } from './TaskCard';
import "./TaskList.css";
import "./AddTask.css";

export const TaskList = () => {
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record React Lectures", completed: true}, 
        {id: 7825, name: "Edit React Lectures", completed: false}, 
        {id: 8391, name: "Watch Lectures", completed: false}
    ]);
    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <section className='tasklist'>
        <ul>
            <div className='header'>
                <h1>TaskList</h1>
                <button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide Tasks" : "Show Tasks"}</button>
            </div>
            { show && tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
            )) }
        </ul>
    </section>
  )
}
