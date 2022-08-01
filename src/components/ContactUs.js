import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const ContactUs = () => {
  return (
    <Container className='p-5'>

        <Form className='mx-auto' style={{background: 'white', border: 'solid black 1px', borderRadius: '5px', width: '30rem'}}>
         <h1 style={{textAlign: 'center', }}>Reach us</h1>

            <Form.Group className="mb-3 m-2" controlId="newsName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3 m-2" controlId="newsPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group className="mb-3 m-2" controlId="newsEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            
            <Form.Group className="mb-3 m-2">
            <Form.Label>What Activity are you interested in learning more about?</Form.Label>
            <Form.Select>
                <option value="1">Cat Yoga with Wendy</option>
                <option value="2">Reservations</option>
                <option value="3">Adoption</option>
            </Form.Select>
            </Form.Group>
            
            <FloatingLabel className="mb-3 m-2" controlId="floatingTextarea2" label="Leave a message here">
            <Form.Control
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: '100px' }}
            />
            </FloatingLabel>
            <Button className="m-2" variant="dark" type="submit">
             Send
            </Button>
        </Form>
    </Container>
  )
}

export default ContactUs