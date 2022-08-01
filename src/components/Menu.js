import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import { GiCoffeeCup } from 'react-icons/gi'

//Made a little Menu component so it can be easily changed
const Menu = () => {
  return (
<Container className='p-5'>
        <Card className='mx-auto' style={{background: 'white', border: 'solid black 1px', borderRadius: '5px', width: '25rem'}}>
        
        <Card.Body>
            <Card.Title>Menu <GiCoffeeCup /></Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Espresso ................................................................ $4.00</ListGroup.Item>
                    <ListGroup.Item>Americano ............................................................ $3.00</ListGroup.Item>
                    <ListGroup.Item>Mocha .................................................................... $3.00</ListGroup.Item>
                    <ListGroup.Item>Tea ........................................................................... $2.00</ListGroup.Item>
                    <ListGroup.Item>Scone ..................................................................... $2.00</ListGroup.Item>
                    <ListGroup.Item>Muffin .................................................................... $2.00</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>

    </Container>
  )
}

export default Menu