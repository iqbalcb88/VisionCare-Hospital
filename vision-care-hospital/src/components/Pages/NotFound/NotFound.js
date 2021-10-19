import React from 'react';
import notFound from '../../../images/notFound.jpg';
const NotFound = () => {
  return (
    <div className='d-flex justify-content-center'>
      <img src={notFound} alt='errorPage' />
    </div>
  );
};

export default NotFound;
