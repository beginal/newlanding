import React from 'react'
import styled from '@emotion/styled';

const Header_wrap = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;  
`
const Header_box = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://www.10wallpaper.com/wallpaper/1366x768/1206/city_night_fantasy-Dreamy_and_Fantasy_wallpaper_1366x768.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size:cover;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;  
   .header_text {
     font-size: 5vw;
     font-weight: 600;
     padding-bottom: 5px;
     text-align:center;
   }
`
const Header = () => {
  const name = "함준호"
  return (
    <Header_wrap>
      <Header_box>
        <div>
          
        <div className="header_text">
        Front-End 개발자 
        </div>
        <div className="header_text">
          {name} 입니다.
        </div>
        </div>
        </Header_box>
    </Header_wrap>
  )
}

export default Header;
