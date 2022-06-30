import React, { useState } from 'react';
import { useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/context';

export default function AddUser() {

  // useContext
  const { dispatchUserEvent } = useContext(AppContext);

  // state
  const [name, setName] = useState('');
  const [age, setage] = useState('');
  const [bio, setbio] = useState('');

  // onsubmit form
  const submitNew = () => {
    dispatchUserEvent('Add_user', { id: Math.random(), name, age, bio } );
  }

  return (
    <section className='pt-3 pb-4'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={4}>
            <h3 className='text-center'>Add New User</h3>
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
                  <Form.Control as="textarea" bio={bio} onChange={(e) => {setbio(e.target.value)}} rows={3} placeholder="Bio..." />
                </Form.Group>

                <Button variant="success" onClick={ submitNew }>Add User</Button>
              </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
