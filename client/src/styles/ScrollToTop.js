import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(true);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const listenToScroll = () => {
    let heightToHidden = 0;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
    {visible && (
      <Wrapper>
        <div className="top-btn" onClick={scrollToTop}>
          <RiArrowUpSLine className="up-icon" />
        </div>
      </Wrapper>
    )}
  </>
  )
}

export default ScrollToTop;

const Wrapper = styled.div`
  .top-btn {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    padding: 0.25rem;
    z-index: 999;
    border-radius: 50%;
    box-shadow: 0px 0px 24px rgba(0,0,0,0.1);
    
    background: #FFCC00; 
     color: #231900;
     width: 4rem;
     height: 4rem;
     font-size: 2rem;
     padding: 0.25rem;

     &:hover{
      background: black; 
     color: white;
     }

    .up-icon {
      transition: transform 0.5s;
      &:hover {
        transform: translateY(-2px);
      }
    }
  }
`;