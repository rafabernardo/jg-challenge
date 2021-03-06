import styled from 'styled-components';

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #3d3d3d;
  @media (max-width: 1023px) {
    font-size: 25px;
    line-height: 28px;
  }
`;

export const TitleSmall = styled(Title)`
  font-size: 22px;
  line-height: 32px;
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #3d3d3d;
  @media (max-width: 1023px) {
    font-size: 14px;
    line-height: 24px;
  }

  a {
    color: #5e20a4;
  }
`;

export const Content = styled.div`
  width: ${({ large }) => (large ? '45vw' : '30vw')};

  @media (max-width: 1023px) {
    width: 80vw;
  }
`;

export const FormContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  width: 30vw;
  margin: 0 auto;
  input {
    margin: 0 10px;
  }

  @media (max-width: 1023px) {
    width: 80vw;
    flex-direction: column;
    input {
      margin: 10px 10px;
    }
  }
`;

export const StyledImage = styled.div`
  .user-profile {
    width: 70px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    padding: 5px;
  }

  .second-section-img {
    width: 30vw;
  }

  .third-section-img {
    width: 25vw;
  }

  .fourth-section-img {
    width: 50vw;
  }

  .fith-section-img {
    width: 15vw;
  }

  @media (max-width: 768px) {
    .second-section-img {
      width: 90vw;
    }

    .third-section-img {
      width: 70vw;
    }
    .fourth-section-img {
      width: 95vw;
    }

    .fith-section-img {
      width: 60vw;
    }
  }
`;

export const HomeCareAvailableLink = styled(Paragraph)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  a {
    color: #5e20a4;
  }

  @media (max-width: 1023px) {
    font-size: 14px;
    line-height: 24px;
    text-align: center;
  }
`;
