import React from 'react';
import styled from '@emotion/styled';

const Outer_Box = styled.div`
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
 div {
  display: inline-block;
 }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 140px;
  height: 180px;
  border: 1px solid black;
  background: white;
  margin-right:5px;
  overflow:hidden;
  &:hover {
    cursor: pointer;
    .text {
      z-index: 99;
      display: flex;
    }
  }
  a {
    text-decoration: none;
  .text {
    display: none;
    justify-content: center;
    align-items: center;
    width:100%;
    position: relative;
    background: rgba(0,0,0,.7);
    height: 190px;
    bottom: 200px;
    margin: 10px 0;
    text-align:center;
    color: white;
  }
  }
`

const box_context = [
  { image: 'http://placehold.it/140x180', link: 'https://beginal.github.io/newlanding/', text: '포트폴리오' },
  { image: 'http://placehold.it/140x180', link: '', text: '345' },
  { image: 'http://placehold.it/140x180', link: '', text: '324' },
  { image: 'http://placehold.it/140x180', link: '', text: '567' },
  { image: 'http://placehold.it/140x180', link: '', text: '768' }
]

const Inner_box = () => {
  return (
    <Outer_Box>
      <div>
        {box_context.map(box => (
          <Box>
            <a href={box.link} target="_blank">
              <img src={box.image} alt={box.text} />
              <div className='text'>
                {box.text}
              </div>
            </a>
          </Box>
        ))}
      </div>
    </Outer_Box>
  )
}

export default Inner_box;


