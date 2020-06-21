import React, { useState, useCallback } from 'react'
import styled from '@emotion/styled';

const Title = styled.h2`
  margin-top: 1.5rem;
  color: ${props => props.color || "black"};
  font-size: 2rem;
  font-weight: 600;
  div {
    border-bottom: 3px solid ${props => props.color || "black"};
  }
`
const P = styled.p`
  color: ${props => props.color || "black"};
`

const WhiteBox = styled.div`
  background: white;
  width: 250px;
  margin-bottom: 2rem;
`
const BoxList = styled.div`
  display: flex;
    img {
      width:24px;
      height:24px;
      margin: 0 6px;
      border-radius: 8px;
    }
    span {
    text-align:left;
    color: #333333;
    font-size: 0.8rem;
    margin: 3px 4px;
    }
    padding: 3px 0;

    & + & {
      border-top: 1px solid #333333
    }`


const Skils_wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: white;
  width:300px;
  align-items: center;
`


const Skill = () => {
  return (
    <Skils_wrap>
      <Title><div>SKILL</div></Title>
      <WhiteBox>
        <BoxList><img src="http://placehold.it/24x24" alt=""/>
        <span>HTML / CSS </span>
        </BoxList>
        <BoxList><img src="http://placehold.it/24x24" alt=""/><span>JavaScript</span></BoxList>
        <BoxList><img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt=""/><span>React</span></BoxList>
        <BoxList><img src="http://placehold.it/24x24" alt=""/><span>Node</span></BoxList>
        <BoxList><img src="http://placehold.it/24x24" alt=""/><span>Git</span></BoxList>
      </WhiteBox>
    </Skils_wrap>
  )
}

export default Skill;