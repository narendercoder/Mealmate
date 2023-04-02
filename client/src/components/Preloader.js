import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Preloader = () => {
  const images = [
    "/images/pizza.svg",
    "/images/burger.svg",
    "/images/drink.svg",
    "/images/salad.svg",
    "/images/tacos.svg",
  ];

  const [currentImage, setCurrentImage] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
     counter === 4 ? setCounter(0) : setCounter(counter+1);
     setCurrentImage(images[counter])
    }, 150);

    return () => clearInterval(intervalId);
  });


  return (
    <Wrapper className="w-screen h-screen flex justify-center items-center">
      <div className="loading-img w-16 ">
        <img src={currentImage} />
      </div>
    </Wrapper>
  );
};

export default Preloader;

const Wrapper = styled.div`
  .loading-img {
    img {
      width: 100%;
      height: auto;
    }
  }
`;
