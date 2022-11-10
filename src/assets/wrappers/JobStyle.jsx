import styled from 'styled-components';

const Wrapper = styled.article`
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
  }

  .main-icon {
    display: grid;
    place-items: center;
    margin-right: 2rem;
    width: 60px;
    height: 60px;
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
    background-color: var(--primary-500);
  }

  h5 {
    margin-bottom: 0.25rem;
    letter-spacing: 0;
  }

  p {
    margin: 0;
    color: var(--grey-400);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;

    @media only screen and (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media only screen and (min-width: 1120px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .status {
    margin-top: 0.5rem;
    width: 100px;
    height: 30px;
    border-radius: var(--borderRadius);
    text-align: center;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  .interview {
    color: rgb(100, 122, 203);
    background-color: rgb(224, 232, 249);
  }
  .declined {
    color: rgb(214, 106, 106);
    background-color: rgb(255, 238, 238);
  }
  .pending {
    color: rgb(233, 185, 73);
    background-color: rgb(252, 239, 199);
  }

  footer {
    margin-top: 1rem;
  }

  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    height: 30px;
  }

  .edit-btn {
    color: var(--green-dark);
    background-color: var(--green-light);
    margin-right: 0.5rem;
  }

  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
`;

export default Wrapper;
