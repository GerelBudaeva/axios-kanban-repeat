import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

function Tasks(props) {

    return (
        <div className="card mb-3">
            <div className="card-header">
                <h3>{props.task.status}</h3>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.task.name}</h5>
                <p className="card-text">{props.task.description}</p>
                <p className="card-text">
                    <button className="btn btn-outline-secondary"
                            disabled={props.task.priority[0] < 1}
                            onClick={() => props.changePriority(props.task._id, +props.task.priority - 1)}
                    > ↓
                    </button>
                    {' '}
                    Priority: {props.task.priority}
                    {' '}
                    <button className="btn btn-outline-secondary"
                            onClick={() => props.changePriority(props.task._id, +props.task.priority + 1)}
                            disabled={+props.task.priority === props.priorities[props.priorities.length - 1]}
                    > ↑
                    </button>
                </p>

                <hr/>

                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button className="btn btn-outline-warning"
                            disabled={props.statuses[0].title === props.task.status}
                            onClick={() => props.tasksRemover(props.task._id, props.task.status, -1)}
                    > ←
                    </button>

                    <DeleteTask
                        deleteTask={props.deleteTask}
                        task={props.task}
                    />

                    <button className="btn btn-outline-warning"
                            disabled={props.statuses[props.statuses.length - 1].title === props.task.status}
                            onClick={() => props.tasksRemover(props.task._id, props.task.status, +1)}
                    > →
                    </button>
                </div>
                <hr/>

                <EditTask
                task={props.task}
                statuses={props.statuses}
                priorities={props.priorities}
                editTask={props.editTask}
                />
            </div>
        </div>
    )
}

export default Tasks;
