import React from "react";
import styled from "styled-components";
import { categories } from "../data/data";
import { GrPrevious, GrNext } from "react-icons/gr";

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
      <div className="category-section relative flex justify-center items-center py-20">
        <div className="custom-container">
          <div className="wrapper flex flex-col justify-center items-center">
            <div className="sub-title">
              <h3>Top Foods</h3>
            </div>
            <div className="title pb-4 mb-4">
              <h1>Our Categories</h1>
            </div>

            <div className="slide-controller">
              <div className="swiper-button-prev slider-arrow">
                <GrPrevious className="arrow-back arrow-icon" />
              </div>

              <div className="swiper-button-next slider-arrow ml-3">
                <GrNext className="arrow-right arrow-icon" />
              </div>
            </div>

            <div className="category-list">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1000: {
                    slidesPerView: 4,
                  },
                  1400: {
                    slidesPerView: 5,
                  },
                  1600: {
                    slidesPerView: 6,
                  },
                }}
              >
                {categories.map((item) => (
                  <SwiperSlide className="category-main mb-8">
                    <>
                      <div className="category-img-box rounded-full overflow-hidden">
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
              </Swiper>

              <ul>
                {categories.map((item) => (
                  <li className="category-main">
                    <>
                      <div className="category-img-box overflow-hidden rounded-full">
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
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.section`
  .category-section {
    width: 100vw;
    height: auto;
  }

  @media (min-width: 768px) {
    .category-list ul {
      display: none;
    }
    .swiper-button-prev {
      position: absolute;
      left: 10%;
    }
    .swiper-button-next {
      position: absolute;
      right: 10%;
    }
    .slide-controller {
      width: 100%;
      position: absolute;
      top: 5%;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      .slider-arrow {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        position: relative;
        font-size: 1.5rem;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        z-index: 5;
      }
      .swiper-button-disabled {
        opacity: 0;
      }
      .swiper-button-prev,
      .swiper-button-next {
        position: absolute;
      }

      .slider-arrow::after {
        content: "";
      }
      .arrow-icon {
        font-size: 2rem;
      }
      /* .swiper-pagination {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        transform: translateX(-50px);
        position: relative;
        width: 100px;

        .swiper-pagination-bullet {
          width: 1rem;
          height: 1rem;
        }
      } */
    }

    .swiper {
      justify-content: center;
      align-items: center;
      height: calc(100%);
      width: 75vw;
    }
    .swiper-wrapper {
      position: relative;
      .swiper-slide.category-main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .category-img-box {
          width: 13rem;
          height: 13rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
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
  }

  @media (max-width: 768px) {
    .swiper {
      display: none;
    }
    .slide-controller {
      display: none;
    }
    .category-list {
      padding: 0 4rem;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }
      .category-main {
        display: flex;
        width: 12rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .category-img-box {
          display: flex;
          width: 10rem;
          height: 10rem;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
          }
        }
        .category-text-box {
          position: relative;
          display: flex;
          padding: 0px 15px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          background-color: #fff;

          .category-text-title {
            bottom: 40px;
            margin: 0 auto 0px;
            text-align: center;
          }
          .category-text-desc {
            display: flex;
            height: auto;
            justify-content: space-between;
            align-items: flex-end;
            justify-content: center;
          }
        }
      }
    }
  }
`;
