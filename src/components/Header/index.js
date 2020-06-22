import React from 'react'
import styled from '@emotion/styled';

const Header_wrap = styled.div`
  display: flex;
  margin: 3rem 0;
  justify-content: center;
  align-items: center;  
`
const Header_box = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
   .header_text {
     font-size: 34px;
     font-weight: 400;
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
        Front-End {name} 입니다.
        </div>
        </div>
        </Header_box>
    </Header_wrap>
  )
}

export default Header;
