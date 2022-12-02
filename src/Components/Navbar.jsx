import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Popup from './Popup';



const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:lightblue;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   
`
const Menu = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey ;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px ;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
  
`
const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size: 14px ;
    cursor: pointer;
    margin-left: 35px ;
    display: flex;
    align-items: center;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {




  return (
    <Container>
        <Wrapper>
            <Left>
                <Menu>
                    <MenuOutlinedIcon></MenuOutlinedIcon>
                </Menu>
            </Left>
            <Center>
                <Logo>HOME</Logo>
            </Center>
            <Right>
                {/* <MenuItem> */}
                    {/* <LocationOnOutlinedIcon style={{color:"gray",fontSize:16}}></LocationOnOutlinedIcon>
                    &nbsp; DELHI */}
                    {/* <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        </FormControl> */}
                {/* </MenuItem> */}
                {/* <MenuItem>REGISTER</MenuItem> */}
                <MenuItem>< NotificationsNoneOutlinedIcon onClick={()=>alert("You clicked notification")}></NotificationsNoneOutlinedIcon></MenuItem>
                {/* <MenuItem>SIGN IN</MenuItem> */}
                {/* <MenuItem>SIGN IN</MenuItem> */}
                <MenuItem><ShareOutlinedIcon onClick={()=>alert("You clicked share")}></ShareOutlinedIcon></MenuItem>
                <MenuItem>
                    {/* <Badge badgeContent={1} color="secondary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge> */}
                    <SearchOutlinedIcon onClick={()=>alert("You clicked search")}></SearchOutlinedIcon> 
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar