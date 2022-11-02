import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterStyle';
import FormRow from '../components/FormRow';

import Logo from '../components/Logo';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setValues((currentValues) => {
      return { ...currentValues, [name]: value };
    });
  };

  const toggleMember = () => {
    setValues((currentValues) => {
      return { ...currentValues, isMember: !currentValues.isMember };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      console.log('Please Fill Out All Fields');
      return;
    }
  };
  return (
    <Wrapper className='full-page'>
      <section>
        <form
          className='form'
          onSubmit={handleSubmit}>
          <Logo />
          <h3>{values.isMember ? 'Login' : 'Register'}</h3>
          {!values.isMember && (
            <FormRow
              labelText='Name'
              type='text'
              id='name'
              name='name'
              value={values.name}
              onChange={handleChange}
            />
          )}

          <FormRow
            labelText='Email'
            type='email'
            id='email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          <FormRow
            labelText='Password'
            type='password'
            id='password'
            name='password'
            value={values.password}
            onChange={handleChange}
          />

          <button className='btn btn-block'>Submit</button>
          <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
            <button
              type='button'
              onClick={toggleMember}
              className='member-btn'>
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
      </section>
    </Wrapper>
  );
};

export default Register;
