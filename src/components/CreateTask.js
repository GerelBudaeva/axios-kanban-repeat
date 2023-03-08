import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function CreateTask(props) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(props.statuses[0]);
    const [priority, setPriority] = useState(props.priorities[0]);

    const toggle = () => {
        setModal(!modal)
        setName('')
        setDescription('');
        setStatus(props.statuses[0].title);
        setPriority(props.priorities[0])
    }

    const onCreate = () => {
        toggle()
        const newTask = {name, description, status, priority}
        props.createTask(newTask)

    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                Create
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create task</ModalHeader>
                <ModalBody>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Name"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                        <input type="text"
                               className="form-control"
                               placeholder="description"
                               value={description}
                               onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            {props.statuses.map(el => <option key={el._id} value={el.title}>{el.title}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Priority</label>
                        <select className="form-select"
                                aria-label="Default select example"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                        >
                            {props.priorities.map((el, index) => <option key={index} value={el}>{el}</option>)}
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onCreate}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateTask;
