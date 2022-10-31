import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingStyle';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img
          src={logo}
          alt='logo'
        />
      </nav>

      <div className='container page'>
        <div>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link
            to='/register'
            className='btn btn-hero'>
            Login/Register
          </Link>
        </div>

        <img
          src={main}
          alt='job hunt'
          className='main-image'
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
