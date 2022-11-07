import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 3rem 2rem 4rem;
  background-color: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

  .form {
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .form-row {
    margin-bottom: 0;
  }

  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }

  .form-center button {
    align-self: end;
    margin-top: 1rem;
    height: 35px;
  }

  @media only screen and (min-width: 992px) {
    .form-center {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }

  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
