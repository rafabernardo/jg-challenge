import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledImage,
  HomeCareAvailableLink,
  Title,
  Paragraph,
  Content,
  TitleSmall,
  ContentLarge,
  FormContent
} from './styles';

import Header from '../../components/Header';
import Section from '../../components/Section';
import userProfileImg from '../../assets/sarah_profile.png';
import secondSectionImg from '../../assets/nanny_share_macbook.png';
import Divider from '../../components/elements/Divider';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';

function Home() {
  return (
    <>
      <Header />
      <Section background='#fff' column gap='10px'>
        <StyledImage>
          <img
            src={userProfileImg}
            alt="Sarah's profile"
            className='user-profile'
          />
        </StyledImage>
        <HomeCareAvailableLink>
          <Link>Sarah’s day care available now in North Sydney Wednesday</Link>,
          Thursday, Friday - 7:30 - 5:30
        </HomeCareAvailableLink>
      </Section>
      <Divider />
      <Section column gap='20px' padding='100px'>
        <Content>
          <Title>
            Share your home,
            <br /> nanny and costs
          </Title>
          <Paragraph>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu. <Link>Hapu means tribe</Link> and it’s our foundational 3
            tribal principles that empowers you to create and manage your own
            tribe. A tribe that together has the power to create new affordable
            solutions in childcare that work for you and your community.
          </Paragraph>
          <Link>Ready to get started?</Link>
        </Content>
        <StyledImage>
          <img
            src={secondSectionImg}
            alt='Nanny share macbook'
            className='second-section-img'
          />
        </StyledImage>
      </Section>
      <Divider size='25%' />
      <Section padding='64px'>
        <ContentLarge>
          <TitleSmall>
            Are you a parent without a nanny and looking to share?
          </TitleSmall>
          <Paragraph>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </Paragraph>
          <FormContent>
            <Input placeholder='Your name'></Input>
            <Input placeholder='Your email'></Input>
            <Button text={'Send'} />
          </FormContent>
        </ContentLarge>
      </Section>
      <Divider size='25%' />
    </>
  );
}

export default Home;
