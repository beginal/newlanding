import React from 'react';
import styled from '@emotion/styled';

const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100px;
  font-size:1.1rem;
  background: #cccccc;
  position: absolute;
  border-radius:0 0 5px 5px;
  right:0;
  box-shadow: 2px 2px 2px rgba(99,99,99,.2);
  bottom: -29px;
  transition: background .5s;
  cursor:pointer;
  &:hover {
    background: ${props => props.bgcolor || "#aaaaaa" };
  }
  div {
    margin-bottom: 5px;
  }
`

export const PortfolioButton = ({clickEvent}) => {
  return (
    <ToggleButton bgcolor="#ff5e5c" onClick={clickEvent}>
      <div>Portfoilo</div>
    </ToggleButton>
  )
}

export const AboutButton = ({clickEvent}) => {
  return (
    <ToggleButton bgcolor="#459dfa" onClick={clickEvent} style={{right: "101px"}}>
      <div>About</div>
    </ToggleButton>
  )
}