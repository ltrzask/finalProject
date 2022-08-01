import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

//create a news letter for customers
const NewsLetter = () => {
  return (
    <Container className='p-5'>

        <Form className='mx-auto' style={{background: 'white', border: 'solid black 1px', borderRadius: '5px', width: '30rem'}}>
         <h1 style={{textAlign: 'center', }}>Subscribe to our Newsletter</h1>

            <Form.Group className="mb-3 m-2" controlId="newsName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3 m-2" controlId="newsEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Button className="m-2" variant="dark" type="submit">
             Sign up
            </Button>
        </Form>
    </Container>
  )
}

export default NewsLetter