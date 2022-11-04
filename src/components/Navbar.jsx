import React, { useState } from 'react';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/NavbarStyle';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar, logoutUser } from '../features/user/userSlice';

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='toggle-btn'
          onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user.name}
            <FaCaretDown />
          </button>
          <div className={`dropdown ${showLogout && 'show-dropdown'}`}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => {
                dispatch(logoutUser());
              }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
