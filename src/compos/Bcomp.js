import React from "react"
import styled from "styled-components"
import Ccomp from "../compos/Ccomp"
import Ecomp from "../compos/Ecomp"
import Fcomp from "../compos/Fcomp"

const Bcomp = () => {
    return (

        <Bcomps>
              <Fcomp/>
             <Ccomp/>
             <Ecomp/>
        </Bcomps>
 
    )

   };
   
   
   export default Bcomp;

   const Bcomps = styled.div`
   width: 90%;
   height: 23vh;
   background-color: white;
   border-radius: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row-reverse;
 
    `;
   