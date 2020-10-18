import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../elements/Button';
import Divider from '../elements/Divider';

import {
  Footer as FooterContainer,
  Logo,
  Content,
  Navigation,
  SocialMediaNavigation,
  CopyRight,
  FooterNavigation,
  SocialMediaContent
} from './styles';

import logoHapu from '../../assets/hapu_gray_logo.png';
import calendarIcon from '../../assets/calendar_icon.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <h1>Become a nanny share host</h1>
        <p>Takes less than 5 minutes to get started</p>
        <Button color='#5E20A4'><img src={calendarIcon} alt="Calendar icon" /><div><p>Create Your Nanny Share</p> <span>Takes less than 5 minutes</span></div> </Button>
        <Link>Or browse local nanny-shares</Link>
      </Content>
      <Logo>
        <img src={logoHapu} alt='Hapu brand' />
      </Logo>

      <FooterNavigation>
        <Navigation>
          <li>
            <Link>Share Your Nanny</Link>
          </li>
          <li>
            <Link>Our Story</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Terms & Privacy</Link>
          </li>
        </Navigation>
      </FooterNavigation>
      <SocialMediaContent>
        <SocialMediaNavigation>
          <li>
            <Link>
              <i className='fa fa-facebook'></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className='fa fa-twitter'></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className='fa fa-instagram'></i>
            </Link>
          </li>
        </SocialMediaNavigation>
      </SocialMediaContent>
      <CopyRight>
        <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;
