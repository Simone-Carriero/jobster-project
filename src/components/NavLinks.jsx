import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { path, id, icon, text } = link;
        return (
          <NavLink
            to={path}
            key={id}
            end
            onClick={toggleSidebar}
            className={`nav-link ${({ isActive }) => isActive && 'active'}`}>
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
