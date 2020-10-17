import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #00c88c;
  padding: 12px 22px;
  cursor: pointer;
  
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;

const Button = (props) => {
  return (
    <StyledButton>
      <span>{props.text}</span>
    </StyledButton>
  );
};

export default Button;
