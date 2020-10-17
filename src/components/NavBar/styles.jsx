import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: 0;
  z-index: 99;
  height: 64px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavBarLogo = styled.div`
  margin-left: 20px;
  img {
    height: 64px;
    width: auto;
  }
`;

export const NavBarItens = styled.div`
  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-right: 20px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }

  li:last-child a {
    margin-right: 0px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #5e20a4;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    ul {
      flex-direction: column;
      align-items: flex-start;
    }
    li {
      padding: 20px;
      color: #fff;
    }
  }
`;

export const StyledBurger = styled.div`
  padding: 20px;
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
