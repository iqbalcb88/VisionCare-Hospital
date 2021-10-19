import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../images/logo.png';

const Header = () => {
  const { user, loggedOut } = useAuth();
  const handleLogOut = () => {
    loggedOut();
  };
  return (
    <Navbar sticky='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/home#home'>
          {' '}
          <img className='w-25' src={logo} alt='' /> Vision Care Hospital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/home'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              AboutUs
            </Nav.Link>
            <Nav.Link as={Link} to='/carrier'>
              Carrier Training
            </Nav.Link>
            <Nav.Link as={Link} to='/mission'>
              Mission & Vision
            </Nav.Link>
            <NavDropdown
              title='Services'
              menuVariant='dark'
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {user.displayName || user.email ? (
            <Nav>
              <img className='header-photo' src={user.photoURL} alt='' />

              <Nav.Link eventKey={2} href='#memes'>
                {user.displayName}
              </Nav.Link>
              <input onClick={handleLogOut} type='submit' value='LogOut' />
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link>Or</Nav.Link>

              <Nav.Link href='/register'>Register</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
