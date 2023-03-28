import React from 'react'
import styled from 'styled-components'
import Categories from '../components/Categories'
import FooterPage from '../components/FooterPage'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

const HomePage = () => {
  return (
    <Wrapper>
        <Header/>
        <HeroSection/>
        <Categories/>
        <FooterPage/>
    </Wrapper>
  )
}

export default HomePage;

const Wrapper = styled.section`
 width: 100vw;
 height: auto;
 overflow-x: hidden;
`