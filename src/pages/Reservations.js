import React, { useState } from 'react'
import resData from '../Data';
import Container from 'react-bootstrap/Container';
import ResList from '../components/ResList';
import AddReservation from '../components/AddReservation';
import UpdateAReservation from '../components/UpdateAReservation';

const Reservations = () => {

  const [res, setRes] = useState(resData)

  const addRes = (reservation) => {
    reservation.id = res.length + 1;
    setRes([...res, reservation]);
  };

  const deleteRes = (id) => {
    setRes(res.filter((reservation) => reservation.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialRes = { id: null, name: "", party: "", time: "" };

  const [currentRes, setCurrentRes] = useState(initialRes);

  const editRes = (id, reservation) => {
    setEditing(true);
    setCurrentRes(reservation);
  };

  const updateRes = (newRes) => {
    setRes(
      res.map((reservation) => (reservation.id === currentRes.id ? newRes : reservation))
    );
    setCurrentRes(initialRes);
    setEditing(false);
  };


//using google figured out how to swap the add and edit components :)
  return( 
    
    <Container>
      
      {editing ? (

        <UpdateAReservation 
        currentRes={currentRes}
        setEditing={setEditing}
        updateRes={updateRes}
        />
      ):(
        <AddReservation addRes={addRes}/>

        )}
      <ResList
      key={res.id}
      reservation={res}
      editRes={editRes}
      deleteRes={deleteRes}
      />
    </Container>




  )
  
}

export default Reservations;