import React from 'react';
import styled from 'styled-components';

const StatItem = ({ title, count, icon, color, bcg }) => {
  return (
    <Wrapper
      color={color}
      bcg={bcg}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 2rem;
  background-color: var(--white);
  border-bottom: 5px solid ${({ color }) => color};
  border-radius: var(--borderRadius);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .count {
    display: block;
    color: ${({ color }) => color};
    font-size: 50px;
    font-weight: 700;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 60px;
    background-color: ${({ bcg }) => bcg};
    border-radius: var(--borderRadius);
    svg {
      font-size: 2rem;
      color: ${({ color }) => color};
    }
  }

  .title {
    margin: 0;
    margin-top: 0.5rem;
    text-align: left;
  }
`;

export default StatItem;
