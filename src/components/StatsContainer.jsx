import React from 'react';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import StatItem from './StatItem';

const StatsContainer = () => {
  const { stats } = useSelector((state) => state.allJobs);
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => (
        <StatItem
          key={index}
          {...item}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
  @media only screen and (min-width: 1120px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default StatsContainer;
