import React from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 4px;
  height: 48px;

  &&::placeholder {
    padding-left: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #3d3d3d;
  }
`;

const Input = (props) => {
  return <StyledInput placeholder={props.placeholder}></StyledInput>;
};

export default Input;
