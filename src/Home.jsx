import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Logo from './images/cure1.png';
import './Home.css';


export const Home = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='rose'>
          <img
              src={Logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Home logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto meto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="https://kushtest1.netlify.app/gamehomepage">Memory Games</Nav.Link>
<<<<<<< HEAD
            <Nav.Link href="https://candid-parfait-9844f4.netlify.app/">Location Finder</Nav.Link>
=======
            <Nav.Link href="https://melodious-pixie-c5df35.netlify.app/">Location Finder</Nav.Link>
>>>>>>> d5b730872959512fb9644ecaa59de2bd9ec5c7b1
            <Nav.Link className='we' href="https://bespoke-longma-159178.netlify.app/">Emergency</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    
  )
}
