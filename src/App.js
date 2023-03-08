import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from 'react';
import Column from './components/Column';
import CreateTask from './components/CreateTask';

function App() {

    const [statuses, setStatuses] = useState([]);
    const [tasks, setTasks] = useState([]);

    const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const getStatuses = () => {
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then(res => {
                setStatuses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getTasks = () => {
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then(res => {
                setTasks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const changePriority = (id, priority) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {
            priority
        })
            .then(res => {
                getTasks()
            })
            .catch(err => {
                console.log(err)
            })
    }

   const tasksRemover = (id, oldStatuses, direction) => {
        const newStatuses = statuses.map(el => el.title);
        const oldStatusesIndex = newStatuses.indexOf(oldStatuses);
        const newStatusIndex = oldStatusesIndex + direction;
        const newStatus = newStatuses[newStatusIndex]
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {
            status: newStatus
        })
            .then((res )=> {
                getTasks()
            })
            .catch(err => {
                console.log(err)
            })
   }

   const deleteTask = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then((res) => {
                getTasks()
            })
            .catch(err => {
                console.log(err)
            })
   }

   const editTask = (id, newTask) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, newTask)
            .then((res) => {
                getTasks()
            })
            .catch(err => {
                console.log(err)
            })
   }

   const createTask = (newTask) => {
        axios.post('https://expressjs-server.vercel.app/tasks', newTask)
            .then((res) => {
                getTasks()
            })
            .catch(err => {
                console.log(err)
            })
   }

    useEffect(() => {
        getStatuses()
        getTasks()
    }, [])


    return (
        <div className="container text-center">
            <div className="row align-items-start">
                <h1>Kanban board</h1>
                <hr/>
                <CreateTask
                createTask={createTask}
                statuses={statuses}
                priorities={priorities}
                />
                {statuses.map(status => <Column
                        status={status}
                        key={status._id}
                        tasks={tasks}
                        changePriority={changePriority}
                        priorities={priorities}
                        tasksRemover={tasksRemover}
                        statuses={statuses}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
