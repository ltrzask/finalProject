import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { TbPaw } from 'react-icons/tb'

//made a carousel for some adoption pictures. used https://unsplash.com/ for free images
const Slides = () => {
  return (
    <Container>
        
        <Card className='mx-auto' style={{margin: '3rem', border: 'solid black 1px', textAlign: 'center', width: '50%'}}>
            <Card.Title className='fs-2 m-2'>Here is a few of our Adoptable cats <TbPaw /></Card.Title>
            </Card>

        <Carousel variant="dark">
            <Carousel.Item>
            <img
                className="d-block w-100 mx-auto"
                src="https://images.unsplash.com/photo-1509670161296-18d69c8f2ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzMxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
                />
            <Carousel.Caption>
                <h3>Annie</h3>
                <p>1 year old female</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1526674183561-4bfb419ab4e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Second slide"
                />
            <Carousel.Caption>
                <h3>Frankie</h3>
                <p>6 year old male</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1536500152107-01ab1422f932?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Third slide"
                />
            <Carousel.Caption>
                <h3>Ziggy</h3>
                <p>3 month old female</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Fourth slide"
                />
            <Carousel.Caption>
                <h3>Benny</h3>
                <p>8 week old male</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1547955922-26be0c1600c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjMzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Fifth slide"
                />
            <Carousel.Caption>
                <h3>Franny</h3>
                <p>2 year old female</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <Card className='mx-auto' style={{margin: '10rem', border: 'solid black 1px', textAlign: 'center', width: '50%'}}>
            <Card.Title>Thinking about adopting?</Card.Title>
      <Card.Body>The best way to do this is to come on in and meet the cats that are available for adoption.
         You can see what cat has the personality that works best for you and your home. Once you find a cat, you’ll fill out an adoption application and an adoption counselor
          will follow up with you. After you receive approval to adopt, we’ll set up a time for you to come and complete the adoption process.</Card.Body>
          <Card.Body>We do adoptions after hours because we don’t want to make what is already a stressful situation for the animals even more so by doing it when there are lots
             of people around. The process takes about half an hour. You’ll sign an adoption contract, go over any medical conditions that the cats may have,
              and pay the adoption fee.</Card.Body>
             <Card.Body> During the two years that we partnered with the local Humane Society, The FatCat Cafe sent 219 cats to good homes. Starting in February 2017,
                 The Cat Cafe began bringing in cats from The Rescue House for customers to interact with and to potentially adopt. Click here to see more adoptable cats from the local
                 Humane Society <TbPaw /></Card.Body>
          <Button className='m-3' size="lg" variant="dark" href="#">More Cats!</Button> {/*I would put a link to whatever humane society but since it's not real I didn't */}
        </Card>
   
    </Container>

  )
}

export default Slides
