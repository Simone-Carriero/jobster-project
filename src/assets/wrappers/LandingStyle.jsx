import styled from 'styled-components';

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }

  .main-image {
    display: none;
  }

  @media only screen and (min-width: 900px) {
    .main-image {
      display: block;
    }
    .page {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Wrapper;
