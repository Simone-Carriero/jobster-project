import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .not-found {
    width: var(--fluid-width);
    max-width: 700px;
    margin: 0 auto;

    img {
      margin-bottom: 2rem;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      margin-top: 0;
      margin-bottom: 0.5rem;
      color: var(--grey-500);
    }

    a {
      text-decoration: underline;
      text-transform: capitalize;
      color: var(--primary-500);
    }
  }
`;

export default Error;
