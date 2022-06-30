import React, { useContext } from 'react';
import { Col, Card, Modal } from 'react-bootstrap';
import { AppContext } from '../context/context';

export default function User({ user }) {

  // useContext
  const { showEditModal, setShowUserModal, dispatchUserEvent } = useContext(AppContext);
  
  return (
    <Col md={4}>
      <Card>
        <Card.Body>
          <Card.Title>{ user.name }</Card.Title>
          <Card.Text>
            Age: { user.age }
            <br />
            { user.bio }
          </Card.Text>
          <a href="#f" className='text-primary pe-3' onClick={ () => setShowUserModal(true) }>Edit</a>
          <a href="#fg" className='text-danger' onClick={() => { dispatchUserEvent('Remover_user', { userId: user.id }) }}>Delete</a>
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal show={ showEditModal } onHide={ () => setShowUserModal(false) }>
        <Modal.Header closeButton>
          <Modal.Title>Edit user data of {user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </Col>
  )
}
