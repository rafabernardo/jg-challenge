import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.section`
  display: grid;
  background: ${({ background }) => (background ? background : '#F2F2F2')};  
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-auto-flow: ${({ column }) => (column ? 'column' : 'row')};
  padding:${({ padding }) => (padding ? padding + ' 0' : '10px 0')};;
  grid-gap: ${({ gap }) => (gap ? gap : 'unset')};

  @media (max-width: 1023px){
    grid-auto-flow: row;
    justify-items: center;
  }
`;

const Section = (props) => {
  return (
    <Container background={props.background} column={props.column} gap={props.gap} padding={props.padding}>
      {props.children}
    </Container>
  );
};

export default Section;
