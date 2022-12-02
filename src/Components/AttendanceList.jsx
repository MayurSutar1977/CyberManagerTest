import React from 'react'
import styled from "styled-components";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const Container = styled.div`
min-width: 140px;
  height: 100px;
 display: flex;
  align-items:center ;
  justify-content:center;
  margin-top: 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Day = styled.h1`
 font-size: 30px;
`
const Month = styled.h1`
 font-size: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  align-items:left;
`;

const LeaveType = styled.h3`
  font-size: 15px;
`;

const LeaveStartEnd = styled.h3`
  font-size: 15px;
`;

const LeaveStatus = styled.h3`
  font-size: 15px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

function AttendanceList({item}) {
  return (
    <Container>
    <Left>
     <Day>{item.leaveStartDay}</Day>
      <Month>{item.leaveStartMonth}</Month>
    </Left>
    <Center>
        <LeaveType>{item.leaveType}</LeaveType>
        <LeaveStartEnd>
        {item.leaveStartDay} {item.leaveStartMonth} - {item.leaveEndDate} {item.leaveEndMonth}
        </LeaveStartEnd>
        <LeaveStatus>{item.leaveStatus}</LeaveStatus>
    </Center>
    <Right>
      <SocialIcon color="E60023">
        <ClearOutlinedIcon></ClearOutlinedIcon>
      </SocialIcon>
    </Right>
  </Container>
  )
}

export default AttendanceList