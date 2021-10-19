import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import useFirebase from '../../../../hooks/useFirebase';
import registerImg from '../../../../images/register.png';

const Register = () => {
  const { user } = useAuth();
  const { createWithEmailPass } = useFirebase();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    e.preventDefault();
    setPass(e.target.value);
  };
  const handleReg = () => {
    createWithEmailPass(email, pass);
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  };
  console.log(user);
  return (
    <Container className='bg-light'>
      <Row xs={1} sm={2} md={2}>
        <Col className='d-flex justify-content-center'>
          <div className=' flex-column d-flex justify-content-center align-items-start my-5 py-5'>
            {user.email || user.displayName ? (
              <h6>SuccessFully Registered {user.displayName || user.email}</h6>
            ) : (
              <h1>Please Register</h1>
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
            <input
              className='mb-3 btn btn-outline-primary'
              onClick={handleReg}
              type='submit'
              value='Register'
            />

            <br />
            <p>
              || Already have an account? Please <Link to='/login'>Login</Link>
            </p>
          </div>
        </Col>

        <Col className='d-flex justify-content-end p-0'>
          <img className='img-fluid' src={registerImg} alt='' />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
