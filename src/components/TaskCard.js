import './TaskCard.css';
//recibiendo props por destructuring

export const TaskCard = ({task, handleDelete, info}) => {
    return (
        <div className="taskcard">
        <li className={ task.completed ? "completed" : "incomplete" }>
            <span>{task.id} - {task.name}</span>
            <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
        </li>
      </div>
    )
}
