import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateAReservation = (props) => {

    useEffect(() => {
        setRes(props.currentRes)
    }, [props])

    const [res, setRes] = useState(props.currentRes);

    const handleChange = e => {
        const {name, value} = e.target;
        setRes({...res, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(res.name && res.party && res.time) props.updateRes(res);
    }



  return (
    <Container>

      <Form className='mx-auto m-5' style={{background: 'white', border: 'solid black 1px', borderRadius: '5px',}}>
         <h1 style={{textAlign: 'center', }}>Make a Reservation!</h1>

        <Form.Group className="mb-3 m-2" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={res.name} name='name' onChange={handleChange} placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3 m-2" controlId="formParty">
          <Form.Label>How many people in your party?</Form.Label>
          <Form.Control type="number" value={res.party} name='party' onChange={handleChange} placeholder="2" />
          <Form.Text className="text-muted">
            No more than four to a party.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 m-2" controlId="formTime">
          <Form.Label>What time?</Form.Label>
          <Form.Control type="text" value={res.time} name='time' onChange={handleChange} placeholder="1:00pm" />
          <Form.Text className="text-muted">
            Reservations are for One hour.
          </Form.Text>
        </Form.Group>

          <Button onClick={handleSubmit} variant="dark" type="submit" className='m-2'>
            Edit
          </Button>
          <Button variant="danger" onClick={() => props.setEditing(false)}>Cancel</Button>  
    </Form>
  </Container>
  )
}

export default UpdateAReservation;