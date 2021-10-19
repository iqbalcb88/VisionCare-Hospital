import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import loginImg from '../../../../images/login.png';

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const { signInWithGoogle, emailPassLogin, user } = useAuth();
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
  console.log(user);
  return (
    <Container>
      <Row>
        <Col>
          <div className=' flex-column d-flex justify-content-center align-items-center my-5 py-5'>
            {user.email || user.displayName ? (
              <h6>SuccessFully LoggedIn as {user.displayName || user.email}</h6>
            ) : (
              <h1>Login Please</h1>
            )}
            <input
              onBlur={handleEmail}
              placeholder='Your Email'
              type='email'
              name='email'
              id='email'
            />
            <input
              onBlur={handlePass}
              placeholder='Your Password'
              type='password'
              name='password'
              id='password'
            />
            <input onClick={handleSignIn} type='submit' value='Login' />

            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            <button onClick={signInWithGoogle}>Sign In With GitHub</button>
            <br />
            <p>
              New Here <Link to='/register'>Register</Link>{' '}
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <img src={loginImg} alt='' />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
