import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorStyle';
import img from '../assets/images/not-found.svg';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div className='not-found'>
        <img
          src={img}
          alt='not found'
          className='img'
        />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>Back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
