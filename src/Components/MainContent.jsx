import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import { leaveData } from "../data";
import { attendanceData } from "../data";
import { mobile } from "../responsive";
import LeaveList from './LeaveList';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AttendanceList from './AttendanceList';

const Container = styled.div`
  width: 100% ;
    height: 100vh;
    display: flex;
    align-items: top;
    justify-content: Center;
    flex-direction:column;
    position: relative;
    overflow: hidden;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
`
const Menu = styled.div`
    /* margin-top:0px;
    margin-bottom:10px; */
  height: 20%;
  width: 100%;
  display: flex;
  justify-content:center;
  /* flex-direction: column; */
  padding: 20px;
  /* border: solid 1px; */
`;

const Left = styled.h1`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid orange;
    font-size: 25px;
    cursor: pointer;
`;

const Right = styled.h1`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  /* border: solid 2px; */
  font-size: 25px;
  cursor: pointer;
`;

const Listleave = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  padding: 20px;
  /* border: solid 2px; */
  flex-wrap: wrap;
  display: ${props => props.show};
`;

const Listattendance = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  padding: 20px;
  /* border: solid 2px; */
  flex-wrap: wrap;
  display: none;
`;
const CircleSmallContainer = styled.div`
 height: 40%;
  width: 20%;
  bottom: 100px;
  right: 0px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background-color: red; */
/* border: 2px solid black; */
position: absolute;
`
const CircleSmall = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: lightblue;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const CircleBigContainer = styled.div`
 height: 40%;
  width: 20%;
  bottom: 0px;
  right: 0px;
  display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background-color: red;
border: 2px solid black; */
position: absolute;
`
const CircleBig = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: blue;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

function MainContent() {

  const [eventName, setEventName] = useState("display");
  const handleClick = (prop) => {setEventName(prop);};

  return (
    <Container>
            <Menu>
                <Left onClick={() => handleClick("leaveData")}>LEAVE</Left>
                <Right onClick={() => handleClick("attendanceData")}>ATTENDANCE</Right>
            </Menu>
            <Listleave show ={eventName}>
            {leaveData.map((item) => (
        <LeaveList item={item} key={item.id} />
            ))}
            </Listleave >
            <Listattendance>
            {attendanceData.map((item) => (
        <AttendanceList item={item} key={item.id} />
            ))}
            </Listattendance>
            <CircleSmallContainer>
              <CircleSmall onClick={()=>alert("You clicked holidays calender")}>
                <TodayOutlinedIcon></TodayOutlinedIcon>
              </CircleSmall>
            </CircleSmallContainer>
            <CircleBigContainer onClick={()=>alert("You clicked Apply leave ")}>
              <CircleBig>
                <AddOutlinedIcon></AddOutlinedIcon>
              </CircleBig>
            </CircleBigContainer>
    </Container>
  )
}

export default MainContent