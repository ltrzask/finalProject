import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import Footer from '../components/Footer'


//was trying to get this cute image to be in the background but I couldn't figure it out so I settled for this card...
const Error = () => {
  return (
    <>
    <Header />
   <Card className='mx-auto m-5 mb-5' style={{ width: '60rem' }}>

    <Card.Body className='mx-auto text-center'>
      <Card.Title>Oops Something went wrong</Card.Title>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/b1/b0/ad/b1b0add4d209c73445b9a70832652f2c.jpg" />
      <Card.Text>
        Click here to go back
      </Card.Text>
      <LinkContainer to='/'>
      <Button variant="dark" size="lg">Home</Button>
      </LinkContainer>
    </Card.Body>
  </Card>
  
  <Footer />
    </>
  
  )
}

export default Error