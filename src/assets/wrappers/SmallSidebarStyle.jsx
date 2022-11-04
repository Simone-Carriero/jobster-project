import styled from 'styled-components';

const Wrapper = styled.aside`
  .sidebar-container {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
    opacity: 0;
    display: grid;
    place-content: center;
    transition: var(--transition);
  }

  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--fluid-width);
    height: 95vh;
    padding: 4rem 2rem;
    border-radius: var(--borderRadius);
    background-color: var(--white);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    text-transform: capitalize;
    color: var(--grey-500);
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--grey-900);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }

  .icon {
    font-size: 1.5rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }

  .active {
    color: var(--grey-900);
  }

  .active .icon {
    color: var(--primary-500);
  }

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export default Wrapper;
