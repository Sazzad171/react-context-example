import React from 'react';
import { Col, Card } from 'react-bootstrap';
// import { AppContext } from '../context/context';

export default function User({ user }) {
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
          <a href="#f" className='text-primary pe-3'>Edit</a>
          <a href="#f" className='text-danger'>Delete</a>
        </Card.Body>
      </Card>
    </Col>
  )
}
