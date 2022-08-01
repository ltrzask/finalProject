import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const ResList = (props) => {

  return (

      <Container >

      <Table className='mx-auto' striped variant='dark' style={{textAlign: 'center', width: '70rem',}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Party</th>
            <th>Time</th>
            
            <th>Edit or Cancel</th> 
          </tr>
        </thead>
        <tbody >
          { props.reservation.length > 0 ? (
            props.reservation.map(reservation => {
              const {id, name, party, time} = reservation;
              return (<tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{party}</td>
                <td>{time}</td>
                <td>
                  <Button className='me-2' variant="outline-info" size='sm' onClick={() => props.editRes(id, reservation)} >Edit</Button>
                  <Button variant="outline-danger" size='sm' onClick={() => props.deleteRes(id)} >Cancel</Button>
                </td>
              </tr>
              )
            })   
          ): (
            <tr>
              No Reservations found
            </tr>
          )
        } 
        </tbody>
    </Table>

    </Container>
  )
}
export default ResList;