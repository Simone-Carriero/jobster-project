import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../features/user/userSlice';
import FormRow from '../../components/FormRow';
import Wrapper from '../../assets/wrappers/DashboardFormPageStyle';

const Profile = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData((currentValues) => {
      return {
        ...currentValues,
        [name]: value,
      };
    });
  };
  return (
    <Wrapper>
      <form
        className='form'
        onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className='form-center'>
          <FormRow
            labelText='Name'
            type='text'
            name='name'
            value={userData.name}
            id='name'
            onChange={handleChange}
          />
          <FormRow
            labelText='Last name'
            type='text'
            name='lastName'
            value={userData.lastName}
            id='last-name'
            onChange={handleChange}
          />
          <FormRow
            labelText='Email'
            type='email'
            name='email'
            value={userData.email}
            id='email'
            onChange={handleChange}
          />
          <FormRow
            labelText='Location'
            type='text'
            name='location'
            value={userData.location}
            id='location'
            onChange={handleChange}
          />
          <button
            type='submit'
            className='btn btn-block'>
            {isLoading ? 'Please wait...' : 'Save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
