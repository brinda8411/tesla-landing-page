import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Section=({title,description,backImg,leftbtn,rightbtn})=> {
    return (
      <Wrap bgImg={backImg}>
      <Fade top>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
    </Fade>
    <Fade bottom>
        <ButtonGroup>
            <Left>
                {leftbtn}
            </Left>
            <Right>
                {rightbtn}
            </Right>
        </ButtonGroup>
    </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
      </Wrap>
    )
}

export default Section;
const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:${props =>`url("/images/${props.bgImg}")`};
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

const ItemText=styled.div`
padding-top:15vh;
text-align:center;

`

const ButtonGroup=styled.div`
display:flex;
margin-bottom:0px;
margin-top:25.667vw;
@media(max-width:768px)
{
    margin-top:50.667vw;
    flex-direction:column;
}
`

const Left=styled.div`
 background-color:black;
 height:40px;
 width:256px;
 color:white;
 justify-content:center;
 display:flex;
 align-items:center;
 border-radius:100px;
 opacity:0.85;
 text-transform:uppercase;
 font-size:12px;
 cursor:pointer;
 margin-right:10px;
 margin-bottom:10px
`
const Right=styled(Left)`
background-color:white;
color:black;
`

const DownArrow=styled.img`
margin-bottom:10px;
height:40px;
animation:animateDown infinite 1.5s;



`
