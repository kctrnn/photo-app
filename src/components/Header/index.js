import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Navbar, Nav } from 'react-bootstrap';

Header.propTypes = {};

function Header(props) {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand href='https://www.facebook.com/kctrnn' target='_blank'>
            PHOTO APP
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav.Link as={Link} to='/photos'>
              Redux Project
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
