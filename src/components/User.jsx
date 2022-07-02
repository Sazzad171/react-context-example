import React, { useContext } from 'react';
import { Col, Card } from 'react-bootstrap';
import { AppContext } from '../context/context';

export default function User({ user }) {

  // useContext
  const {setEditId, setShowUserModal, dispatchUserEvent } = useContext(AppContext);

  // onEdit
  const onEdit = (id) => {
    setShowUserModal(true);
    setEditId(id);
  }
  
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
          <a href="#f" className='text-primary pe-3' onClick={ () => onEdit(user.id) }>Edit</a>
          <a href="#fg" className='text-danger' onClick={() => { dispatchUserEvent('Remover_user', { userId: user.id }) }}>Delete</a>
        </Card.Body>
      </Card>

      

    </Col>
  )
}
