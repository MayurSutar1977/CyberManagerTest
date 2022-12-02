import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


import styled from "styled-components";
import { mobile } from "../responsive";
  
const Container = styled.div`
  min-width: 140px;
  height: 150px;
  display: flex;
  align-items:center ;
  justify-content:center;
  background-color:lightblue;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
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
  margin-right: 70px;
  padding: 10px;
  cursor: pointer;
`;
const SocialIconTitle = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  /* background-color: #${(props) => props.color}; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 70px;
  padding: 10px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  /* ${mobile({ display: "none" })} */
`;

const Title = styled.h3`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  border: solid 2px;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
  
  const Footer = () => {
    return (
      <Container>
        <Left></Left>
        <Center>
          {/* <Logo>RSFCA.</Logo>
          <Desc>
          Rental System For Camera Accessories store is an e-commerce webapp allows consumers to electronically exchange
          goods and services online.
          </Desc> */}
          <SocialContainer>
            <SocialIcon color="3B5999" onClick={()=>alert("You clicked favorites")}>
              <FavoriteBorderOutlinedIcon />
            </SocialIcon>
            <SocialIcon color="E4405F" onClick={()=>alert("You clicked Teams")}>
              <GroupsOutlinedIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE" onClick={()=>alert("You clicked Approvals")}>
              <ErrorOutlineOutlinedIcon />
            </SocialIcon>
            <SocialIcon color="E60023" onClick={()=>alert("You clicked Notifications")}>
              <NotificationsNoneOutlinedIcon />
            </SocialIcon>
          </SocialContainer>

          <SocialContainer>
            <SocialIconTitle>
              Favorite
            </SocialIconTitle>
            <SocialIconTitle>
              Team
            </SocialIconTitle>
            <SocialIconTitle>
              Approvals
            </SocialIconTitle>
            <SocialIconTitle>
              Notifications
            </SocialIconTitle>
          </SocialContainer>
        </Center>
        <Right></Right>
        
      </Container>
    );
  };
  
  export default Footer;