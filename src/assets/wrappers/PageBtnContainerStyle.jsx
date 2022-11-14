import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
  height: 6rem;
  margin-top: 2rem;

  .btn-container {
    background: var(--primary-100);
    border-radius: var(--borderRadius);
  }

  .page-btn {
    width: 50px;
    height: 40px;
    font-size: 1.25rem;
    color: var(--primary-500);
    font-weight: 700;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }

  .active {
    background-color: var(--primary-500);
    color: var(--white);
  }

  .prev-btn,
  .next-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100px;
    height: 40px;
    border-color: transparent;
    color: var(--primary-500);
    background-color: var(--white);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    border-radius: var(--borderRadius);
    transition: var(--transition);
    cursor: pointer;
  }

  .prev-btn:hover,
  .next-btn:hover {
    background-color: var(--primary-500);
    color: var(--white);
  }
`;

export default Wrapper;
