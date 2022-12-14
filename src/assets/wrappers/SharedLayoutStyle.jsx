import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: auto 1fr;

    .dashboard-page {
      width: 90%;
    }
  }
`;

export default Wrapper;
