import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Container className='d-flex justify-content-between'>
        <Nav.Link
          href='https://github.com/kctrnn/photo-app'
          target='_blank'
          rel='noreferrer'
          className='header-logo header-link'
        >
          Photo App
        </Nav.Link>

        <Nav.Link
          exact
          to='/photos'
          className='header-link'
          activeClassName='header-link--active'
          as={NavLink}
        >
          Redux Project
        </Nav.Link>
      </Container>
    </div>
  );
};

export default Header;
