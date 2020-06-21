import React from 'react'
import styled from '@emotion/styled';

const Portfolio_wrap = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  align-items: center;
  margin: 2rem 0;
  transform: skewY(-3deg);
  background:#ff5e5c;
  transition: background 0.3s;
  position: relative;
  margin-top: 10rem;
`
const Inner_box = styled.div`
  width:100%;
  height: 500px;
  border-radius: 2px;
  background: ${props => props.background};
  text-align:center;
  margin: 2rem 3rem;
  transform: skewY(3deg);
  transition: background 0.3s;
  .Portfolio_title {
    span {
    font-size: 2rem;
    font-weight: 600;
    width:100%;
    border-bottom: 3px solid white;
    padding-bottom: 4px;
    }
    color:white;
  }
`

const Portfolio = () => {
  return (
    <Portfolio_wrap>
      <Inner_box>
        <div className="Portfolio_title"><span>Portfolio</span></div>
      </Inner_box>
    </Portfolio_wrap>
  )
}

export default Portfolio;
