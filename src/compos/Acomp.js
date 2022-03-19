import React from "react"
import styled from "styled-components"
import Bcomp from "../compos/Bcomp"

const Acomp = () => {
    return (
        <div>
        <Acomps>
        <Bcomp/>
        </Acomps>

        <Acomps>
        <Bcomp/>
        </Acomps>

        <Acomps>
        <Bcomp/>
        </Acomps>
        </div>

    )

   };
   
   
   export default Acomp;

   const Acomps = styled.div`
   width: 40%;
   height: 30vh;
   background-color: red;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 10px;
 
    `;
   