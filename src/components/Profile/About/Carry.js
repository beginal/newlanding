import React from 'react';
import styled from '@emotion/styled';

const Carry_wrap = styled.div`
  .career_title {
    display:block;
    color: #eeeeee;
    font-size: 1rem;
    font-weight: 600;
    text-align:left;
    margin-bottom: 1rem;
  }
.career_wrap {
  text-align:left;
  margin-bottom: 2rem;
  &:nth-of-type(2n) {
    /* text-align:right; */
  }
  .title {
    color: black;
    font-size: 1rem;
    font-weight: 500;
  }
  .time {
    font-size: .7rem;
    margin:0 0.2rem;
    margin-top: 3px;
    margin-left: 0.8rem;
    color: #ccdddd;
  }
  .des {
    display: flex;
    flex-direction: column;
    margin: 3px 0;
    margin-left: 0.8rem;
    font-size: 0.8rem;
    color: #222222;
  }
}
  `

const Careers = [
  {
    id:1,
    title: "취업 준비중",
    time: "2018년 12월 - 현재",
    des: "현재 백수로 지내고 있습니다."
  },
  {
    id:2,
    title: "공부만 하는중",
    time: "2018년 12월 - 현재",
    des: "일좀 하고싶습니다.."
  },
  {
    id:3,
    title: "살아있는중",
    time: "1995년 10월 - 현재",
    des: "살아는 있습니다. 앞으로도 오래오래 살겠습니다."
  },
]

export const Career = () => {
  return (
    <Carry_wrap>
    <span className="career_title">경력</span>
      {Careers.map(value => (
        <div className="career_wrap" key={value.id}>
        <span className="title">{value.title}</span>
            <p className="time">{value.time}</p>
            <p className="des">{value.des}</p>
        </div>
          ))}  
    </Carry_wrap>
  )
}

export const Education = () => {
  return (
    <Carry_wrap>
    <div  className="career_wrap">        
    <span className="career_title">학력</span>
    <p className="time">2013년 2월</p>
    <p className="des">00고등학교 00과 졸업</p>
      </div>
    </Carry_wrap>
  )
}

