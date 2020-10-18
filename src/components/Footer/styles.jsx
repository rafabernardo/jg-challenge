import styled from 'styled-components';

export const Footer = styled.footer`
  background: #fff;
  grid-template-columns: 20vw 30vw 20vw;
  display: grid;
  grid-template-areas:
    '. content .'
    'logo footerNavigation socialMedia'
    '. copyRight .';
  align-items: center;
  justify-content: center;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #3d3d3d;
  }

  h1 {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    color: #3d3d3d;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-areas:
      'content'
      'footerNavigation'
      'socialMedia'
      'copyRight';
  }
`;

export const Logo = styled.div`
  grid-area: logo;
  justify-self: center;
  img {
    width: 64px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialMediaContent = styled.div`
  grid-area: socialMedia;
  justify-self: center;
`;

export const Content = styled.div`
  grid-area: content;
  text-align: center;
  padding: 50px 0;
  button {
    display: flex;
    align-items: center;
    margin: 20px auto;

    img {
      padding-right: 15px;
    }

    p {
      color: #fff;
      font-size: 16px;
      line-height: 28px;
      margin: 0;
    }

    span {
      font-size: 12px;
      line-height: 16px;
    }
  }
  
`;

export const FooterNavigation = styled.div`
  grid-area: footerNavigation;
  justify-self: center;
`;

export const CopyRight = styled.div`
  grid-area: copyRight;
  justify-self: center;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #3d3d3d;
    opacity: 0.6;
  }
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  li a {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #3d3d3d;
    cursor: pointer;
    text-decoration: none;
    margin-right: 15px;
  }
  li:last-child a {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialMediaNavigation = styled(Navigation)`
  a {
    text-decoration: none;
    display: flex;
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #dfdfdf;
    color: #3d3d3d;
    opacity: 0.7;
  }
  a i {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
