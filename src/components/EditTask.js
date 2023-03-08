import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function EditTask(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [name, setName] = useState(props.task.name);
    const [description, setDescription] = useState(props.task.description);
    const [status, setStatus] = useState(props.task.status);
    const [priority, setPriority] = useState(props.task.priority);

    const onSave = () => {
        const newTask = {name, description, status, priority}
        toggle()
        props.editTask(props.task._id, newTask)
    }

    return (
        <div>
            <Button color="success" onClick={toggle}>
                Edit
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit task</ModalHeader>
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
                    <Button color="primary" onClick={onSave}>
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

export default EditTask;
