import Tasks from './Tasks';

function Column(props) {

    return (
        <div className='col'>
            <h2>{props.status.title.toUpperCase()}</h2>
            {props.tasks.filter(task => task.status === props.status.title).map(el => <Tasks
            task={el}
            key={el._id}
            changePriority={props.changePriority}
            priorities={props.priorities}
            tasksRemover={props.tasksRemover}
            statuses={props.statuses}
            deleteTask={props.deleteTask}
            editTask={props.editTask}
            />)}
        </div>
    )
}

export default Column;
