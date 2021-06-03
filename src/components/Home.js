import React from 'react'
import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";
function Home(props) {
    return (
       <Container>
       <Header/>
           <Section
               title="Model S"
               description="Order Online for Touchless Delivery"
               backImg="model-s.jpg"
               leftbtn="Custom Order"
               rightbtn="Existing Inventory"
           />
           <Section
               title="Model Y"
               description="Order Online for Touchless Delivery"
               backImg="model-y.jpg"
               leftbtn="Custom Order"
               rightbtn="Existing Inventory"
           />
           <Section
               title="Model 3"
               description="Order Online for Touchless Delivery"
               backImg="model-3.jpg"
               leftbtn="Custom Order"
               rightbtn="Existing Inventory"
           />
           <Section
                title="Model X"
               description="Order Online for Touchless Delivery"
               backImg="model-x.jpg"
               leftbtn="Custom Order"
               rightbtn="Existing Inventory"
           />
           <Section
               title="Lowest Cost Solar Panels in America"
               description="Money-back guarantee"
               backImg="solar-panel.jpg"
               leftbtn="Order now"
               rightbtn="learn more"  
           />
            <Section
               title="Solar for New Roofs"
               description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
               backImg="solar-panel.jpg"
               leftbtn="Order now"
               rightbtn="learn more"  
           />
               <Section
               title="Accessories"
               backImg="accessories.jpg"
               leftbtn="Shop now" 
               rightbtn="Learn More"
           />

       </Container>
    )
}

export default Home;
const Container=styled.div`
height:100vh;
overflow-x:hidden;
z-index:-1;



`