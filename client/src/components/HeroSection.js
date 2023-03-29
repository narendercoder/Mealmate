import React from 'react'
import styled from 'styled-components';

const HeroSection = () => {
  return (
   <Wrapper>
     <div className='hero-section flex justify-center items-center'>
      <h1>HeroSection</h1>
     </div>
   </Wrapper>
  )
}

export default HeroSection;

const Wrapper = styled.section`
.hero-section{
  width: 100vw;
}

`

