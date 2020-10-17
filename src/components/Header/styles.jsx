import styled from 'styled-components';
import banner from '../../assets/banner_image.png';

export const Container = styled.header`
  background: linear-gradient(
    314.72deg,
    #c86dd7 -1.5%,
    #7e49c3 39.43%,
    #5912ac 86.02%
  );
  height: 90vh;
  z-index: 1;
  display: flex;
  justify-content: center;

  &&:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-image: url(${banner});
    background-size: cover;
    height: 90vh;
    z-index: 2;
  }

  @media (max-width: 1024px) {
    height: 70vh;
    &&:after {
      background-position: center;
      height: 70vh;
    }
  }
`;

export const Content = styled.div`
  width: 75%;
  display: flex;
  z-index: 10;
  align-self: center;
  align-items: center;
  justify-content: space-between;

  .header-img {
    max-height: 45vh;
    width: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .header-img {
      display: none;
    }
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    .header-img {
      height: 30vh;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 64px;
  z-index: 10;
  position: absolute;
  right: 0;

  .sign-in {
    text-decoration: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    margin: auto 23px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextContent = styled.div`
  font-style: normal;
  color: #ffffff;
  width: 40%;
  height: 100%;
  padding: 20px;
  h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1px;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
    h1 {
      font-size: 30px;
      line-height: 30px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 60%;
    h1 {
      font-size: 30px;
      line-height: 30px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const VideoLink = styled.a`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  img {
    padding-right: 16px;
  }
`;
