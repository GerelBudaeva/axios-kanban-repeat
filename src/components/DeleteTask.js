import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteTask(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const taskRemoveHandler = () => {
        toggle()
        props.deleteTask(props.task._id)
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete task</ModalHeader>
                <ModalBody>
                    Are you sure do you want to delete this <h4>{props.task.name} ?</h4>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={taskRemoveHandler}>
                        Yes
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteTask;
