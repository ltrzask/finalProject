import React from 'react'
import NewsLetter from '../components/NewsLetter'
import ContactUs from '../components/ContactUs'
import ContactCard from '../components/ContactCard'
import Container from 'react-bootstrap//Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const Contact = () => {
  return (
    <Container className='p-5'>
      <Row>
        <Col>
          <ContactCard />
        </Col>
        <Col>
          <Container className='p-5'>
          <Card.Img className='mx-auto' style={{border: 'solid black 1px', borderRadius: '5px', width: '25rem'}}  src="https://i.pinimg.com/474x/a6/f9/cb/a6f9cbaf9f2ee630af96f54763e9d883.jpg" />
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactUs />
        </Col>
        <Col>
          <NewsLetter />
        </Col>
      </Row>
      
    </Container>
  )
}

export default Contact