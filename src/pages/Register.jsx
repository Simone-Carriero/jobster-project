import React from 'react';
import Wrapper from '../assets/wrappers/RegisterStyle';

import Logo from '../components/Logo';

const Register = () => {
  return (
    <Wrapper className='full-page'>
      <section>
        <form className='form'>
          <Logo />
          <h3>Login</h3>
          <div className='form-row'>
            <label
              className='form-label'
              htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              className='form-input'
            />
          </div>
          <div className='form-row'>
            <label
              className='form-label'
              htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              className='form-input'
            />
          </div>

          <button className='btn btn-block'>Submit</button>
        </form>
      </section>
    </Wrapper>
  );
};

export default Register;
