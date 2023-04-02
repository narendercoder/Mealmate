import React, { useState } from 'react';
import Nav from './Nav';
import styled from "styled-components"

const Header = () => {
  const [header, setHeader] = useState(false);
  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setHeader(true);
    }
    else{
      setHeader(false)
    }
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <Wrapper>
        <div className={header ? 'header-section active w-screen': "header-section w-screen"}>
        <div className="header-container h-full w-full px-8">

        <div className="wrapper h-full w-full flex justify-between items-center">

        <div className="logo">
         <h1>Mealmate</h1>
        </div>

        <Nav/>

        </div>
          
        </div>
        </div>
    </Wrapper>
  )
}

export default Header;
const Wrapper  = styled.section`
position: relative;
.header-section{
  position: fixed;
  top: 0;
  left:0;
  width: 100vw;
  height: 100px;
  z-index: 99;
  color: white
}
.header-section.active{
  background: white;
  box-shadow: 0 1px 8px rgba(0, 0, 0, .1) !important;
  color: black;
}

`