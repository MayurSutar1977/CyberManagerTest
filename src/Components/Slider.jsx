// future scope : we will change the slides to show the popular revivews summer sale = user name, desc = review , shop now = 5 stars rating , image = product image


import { FormatUnderlined } from '@mui/icons-material';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100% ;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    /* ${mobile({ display: "none" })} */
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translate(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: lightpink;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg};
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    /* border: solid 1px; */
`
const Title = styled.h1`
    font-size: 50px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
// const Button = styled.button`
// padding: 10px;
// font-size: 20px;
// background-color: transparent;
// cursor: pointer;
// `
const Topic = styled.p`
padding: 10px;
font-size: 20px;
background-color: transparent;
`
const Guest = styled.p`
padding: 10px;
font-size: 20px;
background-color: transparent;
`

const Slider = () => {

    const [slideIndex , setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction ="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon></ArrowLeftOutlinedIcon>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map(
                (item)=>(
                <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img} alt="Image not found">
                    </Image>
                </ImageContainer>
                <InfoContainer>
                    <p>ANNOUNCEMENTS</p>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    {/* <Button>SHOP NOW!</Button> */}
                    <Topic>{item.topic}</Topic>
                    <Guest>{item.gust}</Guest>
                </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow  direction ="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon></ArrowRightOutlinedIcon>
        </Arrow>
    </Container>
  )
}

export default Slider