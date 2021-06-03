import React,{useState} from 'react'
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
function Header() {
    const[menu,setMenu]=useState(false);
    return (
        <Container>
            <Logo>
               <a href="#"><img src="/images/logo.svg"/></a>
            </Logo>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model Y</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
            </Menu>
            <RightMenu>
                <p><a href="#">Shop</a></p>
                <p><a href="#">Tesla account</a></p>
                <BoxMenu onClick={()=>
                    setMenu(true)
                }/>
                  
            </RightMenu>
            <List1 show={menu}>
            <CloseWrap>
            <Cross onClick={()=>setMenu(false)}/>
            </CloseWrap>
           
                        <li><a href="#">Existing Inventory</a></li>
                        <li><a href="#">Used Inventory</a></li>
                        <li><a href="#">Trade-in</a></li>
                        <li><a href="#">Cybertruck</a></li>
                        <li><a href="#">Roadster</a></li>
                        <li><a href="#">Semi</a></li>
                        <li><a href="#">Powerwall</a></li>
                        <li><a href="#">Test drive</a></li>
                        <li><a href="#">Charging</a></li>
                        <li><a href="#">Find us</a></li>
                        <li><a href="#">Support</a></li>
                   
            </List1>
        </Container>
    )
}

export default Header;
const Logo=styled.div
``
const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
justify-content:space-between;
z-index:1;

`
const Menu=styled.div`
display:flex;
align-items:center;
a
{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
}
@media(max-width:768px){
    display:none;
}

`
const RightMenu=styled.div`
display:flex;
align-items:center;
p
{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
}
`
const BoxMenu=styled(MenuIcon)`
cursor:pointer;



`
const List1=styled.div`
background:white;
position:fixed;
list-style-type:none;
top:0;
width:300px;
bottom:0;
right:0;
z-index:1;
overflow-y:auto;
display:flex;
flex-direction:column;
transform:${props=>props.show?'translateX(0%)':'translateX(100%)'};
li
{
    padding:15px 10px;
    text-align:start;
    font-weight:600;
    border-bottom:1px solid grey;
}
`
const Cross=styled(ClearIcon)`
cursor:pointer;


`
const CloseWrap=styled.div`
display:flex;
justify-content:flex-end;


`
