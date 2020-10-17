import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, NavBarLogo, NavBarItens, StyledBurger } from './styles';
import logoImg from '../../assets/hapu_green_logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Navigation>
      <NavBarLogo>
        <NavLink to='/'>
          <img src={logoImg} alt='Hapu brand' />
        </NavLink>
      </NavBarLogo>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavBarItens open={open}>
        <ul className='navbar-itens'>
          <li className='navbar-item'>
            <NavLink to='/'>Create Your Nanny Share</NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/'>Browse Shares</NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/ourstory'>Our Story</NavLink>
          </li>
        </ul>
      </NavBarItens>
    </Navigation>
  );
};

export default Navbar;
