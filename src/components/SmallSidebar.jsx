import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SmallSidebarStyle';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import links from '../utils/links';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div
        className={`${
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }`}>
        <div className='content'>
          <button
            type='button'
            className='close-btn'
            onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            {links.map((link) => {
              return (
                <NavLink
                  to={link.path}
                  key={link.id}
                  end
                  onClick={toggle}
                  className={`nav-link ${({ isActive }) =>
                    isActive && 'active'}`}>
                  <span className='icon'>{link.icon}</span>
                  {link.text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
