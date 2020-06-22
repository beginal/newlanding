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
  color: ${props => props.color || "#333333"};
  margin-top:0.7rem;
  font-size: 0.7rem;
`

const WhiteBox = styled.div`
  background: white;
  width: 250px;
  margin-bottom: 2rem;
`
const BoxList = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align:left;
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
    cursor: pointer;
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

const skillslist = [
  {
    id:1,
    image :"http://placehold.it/24x24", 
    text:"HTML / CSS",
    deep: "~~~~~~~~를 이해하고 있습니다.",
    toggle: true
  },
  {
    id:2,
    image :"http://placehold.it/24x24", 
    text:"JavaScript",
    deep: "가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하",
    toggle: false
  },
  {
    id:3,
    image :"https://cdn.worldvectorlogo.com/logos/react-1.svg", 
    text:"React",
    deep: "",
    toggle: false
  },
  {
    id:4,
    image :"http://placehold.it/24x24", 
    text:"Node.js",
    deep: "",
    toggle: false
  },
  {
    id:5,
    image :"http://placehold.it/24x24", 
    text:"Git",
    deep: "",
    toggle: false
  }
]

const Skill = () => {

  const [id,image,text,deep,toggle] = skillslist;
  
  const toggleSkill = (skill) => {
    skill.toggle = !skill.toggle
    console.log(skill.toggle)
  }
  
  return (
    <Skils_wrap>
      <Title><div>SKILL</div></Title>
      <WhiteBox>
        {
        skillslist.map(skill => (
        <BoxList key={skill.id}
        onClick={() =>toggleSkill(skill)}
        ><img src={skill.image} alt=""/>
        <div>
        <span>{skill.text}</span>
        {skill.toggle && <P>{skill.deep}</P>
        }
        </div>
        </BoxList>
        ))}
      
      </WhiteBox>
    </Skils_wrap>
  )
}

export default Skill;