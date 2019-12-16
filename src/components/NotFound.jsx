import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

var NotFound = () => {
  return (
    <div className='not-found-page'>
      <img src='https://www.rooseveltlibrary.org/wp-content/uploads/2016/10/PageNotFound.png' alt='404' />
      <center><Link to="/">Return to Home Page</Link></center>
    </div>
  );
}

export default NotFound;