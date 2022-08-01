import React from 'react';
import Menu from '../components/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const Home = () => {
  return (
    <>
    <Container className='p-5'>

      <Row>
        <Card className='mx-auto' style={{background: 'white', border: 'solid black 1px', borderRadius: '5px', width: '65rem', alignContent: 'center'}}>
          <Card.Title className='mx-auto'>Enjoy Award-Winning Locally Roasted Coffee in the Company of Cats!</Card.Title>
            <Card.Body className='mx-auto'>The Cat Café provides you with a chance to relax and enjoy purr therapy.</Card.Body>
              <Card.Img className='mx-auto' style={{width: '50rem'}}  src="https://media.timeout.com/images/105871324/image.jpg" />
            <Card.Body className='mx-auto'>Operating since January 2015, The Cat Café is the fourth oldest continuously operating kitty café in the United States.
            Our menu features award-winning espresso and coffee and pastries. The cats are available for adoption, should you fall in love during your visit.</Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <Menu />
        </Col>
        <Col className='p-5'>
            <Card className='mx-auto p-3' style={{ width: '30rem', background: 'white', border: 'solid black 1px', borderRadius: '5px', alignContent: 'center' }}>
              <Card.Title>Upcoming Event</Card.Title>
                <Card.Img variant="top" src="https://fh-sites.imgix.net/sites/2830/2019/06/12220546/cat-yoga51.jpeg?auto=compress%2Cformat&fit=crop&crop=faces&w=360&h=240" />
                <Card.Body>
                  <Card.Title>Yoga with Cats</Card.Title>
                    <Card.Text>
                    Come enjoy a soothing Hatha flow yoga session with the playful cats at The Cat Café, every Tuesday and Thursday at 6pm. Your instructor, Wendy,
                    leads you in a practice suitable for all experience levels. The cats roam around as you practice, and they might decide to join you on the mat or climb on your lap.
                    </Card.Text>
              
             </Card.Body>
           </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Home