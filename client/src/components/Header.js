import React from 'react';
import Nav from './Nav';
import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
        <div className='header-section '>
        <Nav/>
        </div>
    </Wrapper>
  )
}

export default Header;

const Wrapper  = styled.section`
width: 100vw;
`