import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../elements/Button';

import { Container, Content, Menu, TextContent, VideoLink } from './styles';

import headerImg from '../../assets/banner_modal.png';
import playVideo from '../../assets/play_icon.svg';

const Header = () => {
  return (
    <Container>
      <Menu>
        <Button> <span>Become a Nanny Share Host</span> </Button>
        <NavLink className='sign-in' to='/'>
          Sign in
        </NavLink>
      </Menu>
      <Content>
        <TextContent>
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
          </p>
          <VideoLink>
            <img src={playVideo} alt='Play video' /> See hapu in action (27
            seconds)
          </VideoLink>
        </TextContent>
        <img
          className='header-img'
          src={headerImg}
          alt='Manage your nanny share'
        />
      </Content>
    </Container>
  );
};

export default Header;
