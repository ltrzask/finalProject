import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import Adopt from './pages/Adopt'
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

//using react-bootstrap for styling

const App = () => {


  return (
    <Router>
      <Header />
      <Footer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      

    </Router>
  );
}

export default App;
