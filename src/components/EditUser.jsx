import React, { useContext, useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/context';

export default function EditUser() {

  // useContext
  const { users, showEditModal, setShowUserModal, dispatchUserEvent, editId } = useContext(AppContext);

  // state
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [age, setage] = useState('');
  const [bio, setbio] = useState('');

  useEffect(() => {
    console.log(editId);
    users.forEach((user) => {
      if (user.id === editId) {
        // console.log(user.id);
        setId(user.id);
        setName(user.name);
        setage(user.age);
        setbio(user.bio);
      }
    });
  }, [editId, users, showEditModal]);

  // onSubmit
  const addNewUser = () => {
    const newUser = { id: id, name: name, age: age, bio: bio };
    dispatchUserEvent('Edit_user', newUser);

    setShowUserModal(false);
    // reset state
    setName('');
    setage('');
    setbio('');
  }

  return (
    <Modal show={ showEditModal } onHide={ () => setShowUserModal(false) }>
      <Modal.Header closeButton>
        <Modal.Title>Edit user data of {name}</Modal.Title>
      </Modal.Header>
      <div className='modal-body'>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" value={age} onChange={(e) => {setage(e.target.value)}} placeholder="Enter Age" />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" value={bio} onChange={(e) => {setbio(e.target.value)}} rows={3} placeholder="Bio..." />
          </Form.Group>

          <Button variant="success" onClick={ addNewUser }>Add New User</Button>
        </Form>
      </div>
    </Modal>
  )
}
