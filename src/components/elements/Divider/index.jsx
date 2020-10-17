import React from 'react';
import styled from 'styled-components';

export const StyledHr = styled.div`
  hr {
    width:  ${({ size }) => (size ? size : '100%' )};  
    border: none;
    padding: 0;
    height: 1px;
    background-color: #dfdfdf;
    margin: 0 auto;
  }
`;

const Divider = (props) => {
  return (
    <StyledHr size={props.size}>
      <hr></hr>
    </StyledHr>
  );
};

export default Divider;
