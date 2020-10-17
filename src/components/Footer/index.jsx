import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logoHapu from '../../assets/hapu_gray_logo.png';

const Footer = () => {
  return (
    <footer>
      {/* <div className='footer-content'>
        <img src={logoHapu} alt='Hapu brand' />
        <ul className='footer-nav'>
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
        </ul>

        <ul className='footer-nav footer-social-midia'>
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
        </ul>
      </div>
      <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p> */}
    </footer>
  );
};

export default Footer;
