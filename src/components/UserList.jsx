import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function UserList() {
  return (
    <section className='pt-3 pb-4'>
      <Container>
        <h3 className='text-center'>Available Users</h3>
        <Row className='justify-content-center'>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://dummyimage.com/600x400/000/fff" />
              <Card.Body>
                <Card.Title>Sazzad Bin Jafor</Card.Title>
                <Card.Text>
                  Age: 24
                  <br />
                  Software developer
                </Card.Text>
                <a href="#f" className='text-primary pe-3'>Edit</a>
                <a href="#f" className='text-danger'>Delete</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
