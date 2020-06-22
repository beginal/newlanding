import React from 'react'
import styled from '@emotion/styled';

const Intro_wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:left;
  width: 100%;
  margin: 2rem 0;
  div{
    padding-left:2rem;
    h2 {
      font-size:1.2rem;
      margin-left: 0.5rem;
      color: #fc4a1a;
    }
  p {
    text-align:left;
    font-size:0.9rem;
    margin: 0.1rem;
    margin-left: 1rem;
  }
  }
`
const Intro = () => {
  return (
    <Intro_wrap>
      <div>
      <h2>Front-End 개발자 함준호입니다.</h2>
      <p>좋은 개발자가 되기위해 혼자서 열심히 노력했습니다.</p>
      <p>React를 사용한 Front-End 개발에 관심이 많습니다.</p>
      <p>현재 페이지는 React로 제작되었습니다.</p>
      <p></p>
      </div>
    </Intro_wrap>
  )
}

export default Intro;
