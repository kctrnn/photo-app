import { logout } from 'app/userSlice';
import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);

  const isLoggedIn = !!loggedInUser.id;

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };

  return (
    <div className='header'>
      <Container className='d-flex justify-content-between align-items-center'>
        <Nav.Link to='/photos' className='header-logo header-link' as={Link}>
          Photo App
        </Nav.Link>

        {isLoggedIn && (
          <p
            style={{ marginBottom: '0' }}
          >{`Welcome to ${loggedInUser.username} 🤟🤟`}</p>
        )}

        {isLoggedIn ? (
          <Button onClick={handleLogoutClick}>Log out</Button>
        ) : (
          <Nav.Link
            exact
            to='/signin'
            className='header-link'
            activeClassName='header-link--active'
            as={NavLink}
          >
            Sign In
          </Nav.Link>
        )}
      </Container>
    </div>
  );
};

export default Header;
