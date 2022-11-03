import React from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayoutStyle';
import Navbar from '../../components/Navbar';
import SmallSidebar from '../../components/SmallSidebar';
import BigSidebar from '../../components/BigSidebar';

const SharedLayout = () => {
  return (
    <Wrapper>
      <SmallSidebar />
      <BigSidebar />
      <div>
        <Navbar />
        <main className='dashboard-page'>
          <Outlet />
        </main>
      </div>
    </Wrapper>
  );
};

export default SharedLayout;
