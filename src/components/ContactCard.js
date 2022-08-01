import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import { FaPhoneAlt, FaTwitter, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import ListGroup from 'react-bootstrap/ListGroup';

//card of all the contacts for the Cafe
const ContactCard = () => {
  return (
    <Container className='p-5'>
        <Card className='mx-auto' style={{background: 'white', border: 'solid black 1px', borderRadius: '5px', width: '25rem'}}>
        
        <Card.Body>
            <Card.Title>FatCat Cafe</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item><FaPhoneAlt />  (555) 555-1234</ListGroup.Item>
                    <ListGroup.Item><FaMapMarkerAlt />  123 East Meow st. CatBurg, OR 95555</ListGroup.Item>
                    <ListGroup.Item><MdEmail /> fatcatcafe@email.com</ListGroup.Item>
                    <ListGroup.Item><BsFacebook /> facebook.com/fatcatcafe</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> twitter.com/fatcatcafe</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> instagram.com/fatcatcafe</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>

    </Container>
  )
}

export default ContactCard