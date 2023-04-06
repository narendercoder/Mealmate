import React from 'react'
import styled from 'styled-components'
import Categories from '../components/Categories'
import Experience from '../components/Experience'
import Feedback from '../components/Feedback'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ScrollToTop from '../styles/ScrollToTop'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <Wrapper>
        <Header/>
        <ScrollToTop/>
        <HeroSection/>
        <Categories/>
        <Feedback/>
        <Experience/>
        <Footer/>
    </Wrapper>
  )
}

export default HomePage;

const Wrapper = styled.div`
 position: relative;
 width: 100vw;
 height: auto;
 overflow-x: hidden;
`