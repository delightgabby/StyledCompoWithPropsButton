import React from "react"
import styled from "styled-components"
import Button from "../compos/Dcomp"


const Ccomp = () => {
    return (
       
         <Wrap>
        <Ccomps/>
        <Button/>
        </Wrap>
        
      
    )

   };
   
   
   export default Ccomp;

   const Wrap = styled.div`
   width: 40%;
   height: 20vh;
   background-color: yellow;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 
    `;
   

   const Ccomps = styled.div`
   width: 80%;
   height: 5vh;
   background-color: black;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 5px;
 
    `;
   