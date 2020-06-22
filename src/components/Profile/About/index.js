import React from 'react'
import styled from '@emotion/styled';
import Skils from './Skils';

const About_wrap = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  align-items: center;
  margin: 2rem 0;
  transform: skewY(-3deg);
  background:#459dfa;
  transition: background 0.3s;
  position: relative;
  margin-top: 10rem;
`
const Inner_box = styled.div`
  width:100%;
  border-radius: 2px;
  background: ${props => props.background};
  text-align:center;
  margin: 2rem 3rem;
  transform: skewY(3deg);
  transition: background 0.3s;
  
  .about_title {
    span {
    font-size: 2rem;
    font-weight: 600;
    width:100%;
    border-bottom: 3px solid white;
    padding-bottom: 4px;
    }
    margin-bottom: 2rem;
    color:white;
  }
  .swt {
    text-align:left;
    span {
      color: black;
      font-size: 1.5rem;
      font-weight: 600;
      border-bottom: 3px solid black;
      padding-bottom: 4px;
    }
    div {
      margin-top:1rem;
    p {
      margin: 0px;
      font-size: 1rem;
      color: black;
    }
    }
  }
  .about_skils {
    margin: 4rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const About = () => {
  return (
    <About_wrap>
      <Inner_box>
        <div className="about_title"><span>ABOUT</span></div>
         <div className="swt">
          <span>경력 사항</span>
          <div>
          <p>설명설명설명설명설명설명설명설명</p>
          <p>설명설명설명설명설명설명설명설명</p>
          <p>설명설명설명설명설명설명설명설명</p>
          </div>
           </div> 
           <div className="swt">
          <span>경력 사항</span>
          <div>
          <p>설명설명설명설명설명설명설명설명</p>
          <p>설명설명설명설명설명설명설명설명</p>
          <p>설명설명설명설명설명설명설명설명</p>
          </div>
           </div> 
           <div className="swt">
          <span>경력 사항</span>
          <div>
          <p>설명설명설명설명설명설명설명설명</p>
          <p>설명설명설명설명설명설명설명설명</p>
          <p>설명설명설명설명설명설명설명설명</p>
          </div>
           </div> 
        <div className="about_skils">
          <Skils />
        </div>
      </Inner_box>
    </About_wrap>
  )
}

export default About;
