import React from "react";
import styled from "styled-components";
import { categories } from "../data/data";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

//import swiper core and require module
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//import Swper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Categories = () => {
  return (
    <Wrapper>
      <div className="category-section w-full h-full flex justify-center items-center">
        <div className="custom-container">
          <div className="wrapper flex flex-col justify-center items-center">
            <div className="sub-title">
              <h3>Top Foods</h3>
            </div>
            <div className="title pb-4 mb-4">
              <h1>Our Categories</h1>
            </div>

            <div className="category-list">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={50}
                // slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
              0: {
                slidesPerView: 1,
              },
             525: {
                slidesPerView: 2,
              },
              728: {
                slidesPerView: 3,
              },
              1000:{
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1400:{
                slidesPerView: 6,
              }
            }}
              >
                {categories.map((item) => (
                  <SwiperSlide className="category-main">
                    <>
                      <div className="category-img-box">
                        <a href="/">
                          <img src={item.img} alt="" />
                        </a>
                      </div>

                      <div className="category-text-box">
                        <div className="category-text-title">
                          <a href="/">
                            <h3>{item.name}</h3>
                          </a>
                        </div>
                        <div className="category-text-desc mb-8"></div>
                      </div>
                    </>
                  </SwiperSlide>
                ))}

                {/* <div className="slide-controller">
                  <div className="swiper-button-prev slider-arrow">
                    <BiLeftArrowAlt className="arrow-back" />
                  </div>

                  <div className="swiper-button-next slider-arrow ml-3">
                    <BiRightArrowAlt className="arrow-right" />
                  </div>
                </div> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.section`
  width: 100vw;

  .swiper {
    justify-content: center;
    align-items: center;
    height: calc(100%);
    width: 80vw;
  }
  .swiper-wrapper {
      position: relative;
      .swiper-slide.category-main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .category-img-box {
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 100%;
          }
        }
        .category-text-desc {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          justify-content: center;
        }
      }
    }
  

  /* .category-list {

    .category-main {
      margin-bottom: 30px;
      .category-img-box {
        position: relative;
        padding: 0px 15px;
        z-index: 1;
        margin-right: auto;
        margin-bottom: -83px;
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 200px;
      }
      .category-text-box {
        position: relative;
        display: flex;
        padding: 120px 15px 15px;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        border-radius: 10px;
        background-color: #fff;
        transition: 0.3s;

        .category-text-title {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 40px;
          display: block;
          margin: 0 auto 0px;
          justify-content: space-between;
          text-align: center;
        }
        .category-text-desc {
          display: flex;
          height: 50px;

          justify-content: space-between;

          align-items: flex-end;
          justify-content: center;
        }
      }
    }
  } */
`;
