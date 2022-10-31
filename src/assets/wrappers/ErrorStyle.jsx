import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .not-found {
    width: var(--fluid-width);
    max-width: 700px;
    margin: 0 auto;

    img {
      margin-bottom: 2rem;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      margin-top: 0;
      margin-bottom: 0.5rem;
      color: var(--grey-500);
    }

    a {
      text-decoration: underline;
      text-transform: capitalize;
      color: var(--primary-500);
    }
  }
`;

export default Wrapper;
