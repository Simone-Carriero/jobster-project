import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterStyle';
import FormRow from '../components/FormRow';
import { toast } from 'react-toastify';
import Logo from '../components/Logo';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
const Register = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [navigate, user]);

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
      toast.error('Please Fill Out All Fields');
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }

    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );
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

          <button
            type='submit'
            disabled={isLoading}
            className='btn btn-block'>
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
          <button
            type='button'
            disabled={isLoading}
            className='btn btn-block btn-hipster'
            onClick={() => {
              dispatch(
                loginUser({
                  email: 'testUser@test.com',
                  password: 'secret',
                })
              );
            }}>
            {isLoading ? 'Loading...' : 'Demo app'}
          </button>
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
