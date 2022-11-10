import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  .icon {
    margin-right: 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-400);
    }
  }

  .text {
    text-transform: capitalize;
  }
`;

export default Wrapper;
