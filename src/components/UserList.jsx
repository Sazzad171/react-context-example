import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';

// context
import { AppContext } from '../context/context';
import User from './User';

export default function UserList() {

  // useContext
  const { users } = useContext(AppContext);

  return (
    <section className='pt-3 pb-4'>
      <Container>
        <h3 className='text-center mb-3'>Available Users</h3>
        <Row className='justify-content-center'>

          {/* map */}
          {users && users.map((user) => (
            <User key={ user.id } user={ user } />
          ))}

        </Row>
      </Container>
    </section>
  )
}
