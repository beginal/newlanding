import React from 'react'
import styled from '@emotion/styled';

const Intro_wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:left;
  width: 100%;
  margin: 2rem 0;
  padding:0 10rem;
  div{
    h2 {
      font-size:1.2rem;
      margin-left: 0.5rem;
    }
  p {
    text-align:left;
    font-size:1rem;
    margin: 0.1rem;
    margin-left: 1rem;
  }
  }
`
const Intro = () => {
  return (
    <Intro_wrap>
      <div>
      <h2>대충 자기소개</h2>
      <p>제가 1994년 LA에 처음 갔을때</p>
      <p>그때 모든 경기 하나하나가 참 힘들었습니다.</p>
      <p>하지만 포기하지 않았습니다.</p>
      <p>소위 눈물젖은빵 이라고 그러죠</p>
      <p>그걸 먹으면서 꿋꿋이 이겨냈습니다.</p>
      </div>
    </Intro_wrap>
  )
}

export default Intro;
