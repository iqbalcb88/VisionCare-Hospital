import {
  faGithub,
  faGooglePlus,
  faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import loginImg from '../../../../images/login.png';

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const { signInWithGoogle, emailPassLogin, user, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    e.preventDefault();
    setPass(e.target.value);
  };
  console.log(email, password);
  const handleSignIn = () => {
    emailPassLogin(email, password);
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  };
  let { from } = location.state || { from: { pathname: '/' } };
  console.log(from);
  const handleGoogleSignIn = () => {
    signInWithGoogle(() => {
      history.replace(from);
    });
  };
  console.log(error);
  return (
    <Container>
      <Row xs={1} sm={2} md={2}>
        <Col className='d-flex justify-content-center'>
          <div className=' flex-column d-flex justify-content-center align-items-start my-5 py-5'>
            {user.email || user.displayName ? (
              <h6>SuccessFully LoggedIn as {user.displayName || user.email}</h6>
            ) : (
              <h1>Login Please</h1>
            )}
            <label htmlFor='email'>Email address: </label>
            <input
              className='mb-3'
              onBlur={handleEmail}
              placeholder='Your Email'
              type='email'
              name='email'
              id='email'
            />
            <label htmlFor='password'>Password</label>
            <input
              className='mb-3'
              onBlur={handlePass}
              placeholder='Your Password'
              type='password'
              name='password'
              id='password'
            />
            <p>{error}</p>
            <input
              className='mb-3 btn btn-outline-primary'
              onClick={handleSignIn}
              type='submit'
              value='Login'
            />

            <div>
              <button
                className='me-3 btn btn-warning'
                onClick={handleGoogleSignIn}
              >
                <FontAwesomeIcon icon={faGooglePlusG} /> Google
              </button>
              <button className='btn btn-dark' onClick={signInWithGoogle}>
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </button>
            </div>
            <br />
            <p>
              New Here <Link to='/register'>Register</Link>{' '}
            </p>
          </div>
        </Col>

        <Col>
          <div>
            <img className='img-fluid' src={loginImg} alt='' />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
