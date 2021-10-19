import React, { useState } from 'react';
import useFirebase from '../../../../hooks/useFirebase';

const Register = () => {
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
  };
  return (
    <div className='text-center my-5'>
      <input onBlur={handleEmail} type='email' name='' id='' />
      <br />
      <input onBlur={handlePass} type='password' name='' id='' />
      <br />
      <input onClick={handleReg} type='submit' name='' id='' value='Submit' />
    </div>
  );
};

export default Register;
