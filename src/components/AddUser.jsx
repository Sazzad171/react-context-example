import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function AddUser() {
  return (
    <section className='pt-3 pb-4'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={4}>
            <h3 className='text-center'>Add New User</h3>
            <Form>
                <Form.Group className="mb-2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" placeholder="Enter Age" />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Bio..." />
                </Form.Group>

                <Button variant="success">Add User</Button>
              </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
