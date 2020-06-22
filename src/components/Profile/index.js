import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import CakeIcon from '@material-ui/icons/Cake';

import {PortfolioButton, AboutButton} from './ToggleTab';
import Portfolio from './Portfolio';
import About from './About';
import Intro from './Intro';


const Porfile_wrap = styled.div`
  display: flex;
  margin: 3rem 0;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
const Porfile_box = styled.div`
  display: flex;
  justify-content: center;
  position: relative; 
  align-items:center;
  width: 390px;
  background: white;
  border: 1px solid rgba(99,99,99,.08);
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(99,99,99,.2);
  margin: 5px;
  padding: 10px;
  .image {
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 0 20px;
    img {
      border-radius: 6px;
    }
  }
  .resume {    
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    .name {
      display: flex;
      justify-content: center;
      margin:0;
      margin-bottom: 10px;
      font-size: 1.5rem;
      font-weight: 600;
    }
    p {
      display: flex;
      justify-content: left;
      align-items:center;
      margin-bottom: 4px;
      color: #333333;
    .svg {
      font-size: 1rem;
      margin-right: 10px;
      opacity: 0.7;
    }
    font-size: 0.8rem;
    }
  }
  
`
const ProfileState = {
  name: "함 준 호",
  birthday: "1995.10.26",
  phone: '010-9215-9984',
  email: 'jun10ho26@gmail.com',
  text: [
    "블라블라",
    "블라블라22",
  ]
}

const Porfile = () => {

  const { name, birthday, text, email, phone } = ProfileState;

  const [toggleTab, setToggleTab] = useState('')  

  useEffect(() => {
    console.log(toggleTab)
  },[toggleTab])
  
  const ToggleTabs = () => {
    switch(toggleTab) {
    case 'about' : return <About />
    case 'portfolio' : return <Portfolio />
    default: return <About />
  }
  }
  return (
    <Porfile_wrap>
      <Porfile_box>
        <div className="image">
          <img src="http://placehold.it/150x200" alt=""/>
        </div>
        <div className="resume">
          <p className="name">{name}</p>
          <p><CakeIcon className="svg" />{birthday}</p>
          <p><EmailIcon className="svg" />{email}</p>
          <p className="phone"><CallIcon className="svg" />{phone}</p>
        </div>
      <AboutButton name="about" clickEvent={() => setToggleTab('about')} />
      <PortfolioButton name="portfolio" clickEvent={() => setToggleTab('portfolio')} />
      </Porfile_box>
      <Intro />
      { ToggleTabs() }
    </Porfile_wrap>
  )
}

export default Porfile
