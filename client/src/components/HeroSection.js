import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="hero-section relative flex flex-col justify-center items-center pt-60 pb-20">
        <div className="custom-container w-full">
          <div className="grid lg:grid-cols-2">
            <div className="hero-content flex flex-col justify-center">
              <div className="hero-title">
                <span>
                  <img src="images/welcome.png" className="mb-4" alt="" />
                </span>
                <div className="content">
                  <h1 className="my-4 mb-8">
                    Order Healthy and <span className=" text-orange-600">Fresh Food</span> Any Time
                  </h1>
                  <p className="mb-9">
                    Italian food makes people think of big family dinners. So
                    you may want to position your restaurant as a place to bring
                    the whole family.
                  </p>
                </div>
              </div>
              <div className="hero-search w-full px-4 py-5 bg-white">
                <div className="search-box">
                  <input type="text" className="input w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-img">
          <img
            src="https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/wave.svg"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.section`
.hero-section{
  background-image: url("https://marketplace.foodotawp.com/wp-content/uploads/2021/05/two.png");
   background-position: center right;
   background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  overflow: hidden;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;

  h1,p{
    color: white;
  }

.custom-container{
   padding: 0 2rem;
  .hero-content .hero-title .content
  {
    h1{
    color: #ffffff;
    line-height: 1.2em;
    text-transform: capitalize;
    font-weight: 700;
    
    }
    span{
      font-size: 3.3rem;
    }
    p {
    font-size: 1.4rem;
    line-height: 34px;
    width: 100%;
    opacity: 0.9;
    font-weight: 700;
}
  } 
}

  .bottom-img {
    position: relative;
    width: 100%;
    bottom: -80px;
    z-index: 1;
    img {
    width: 100%;
}
  }

}

@media (max-width: 810px) {
  .hero-section{
   background-position: bottom left;
   padding: 150px 0px 100px 0px;
  }
  .custom-container{
    padding: 0 4rem !important;
  }
  .bottom-img {
    bottom: -100px !important;
}

`;
