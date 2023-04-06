import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons, Promo } from "../data/Menus";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer-section bg-gray-900 text-white">
        {/* footer-top-section */}
        <div className="footer-top-wrapper">
          <div className=" bg-[#ffffff19] py-10 flex justify-center">
            <div>
              <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
                {Promo.map((item) => (
                  <>
                    <div className="px-4 py-4">
                      <div className="flex items-center">
                        <div className="icon mr-4 text-4xl bg-amber-500 p-4 text-white rounded-full">
                          <item.icon />
                        </div>
                        <div className="title">
                          <h3 className="text-lg">{item.name}</h3>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* footer-middle-section */}

        <div className="footer-container">
          <ItemsContainer />
        </div>

        {/* footer-bottom-section */}

        <div className="footer-bottom pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 items-center">
            <SocialIcons Icons={Icons} />
            <div className="flex justify-center items-center">
              <span className="text-sm mb-0">
                © 2023 <span className=" text-yellow-300">Mealmate</span>. All
                rights reserved.
              </span>
            </div>
            <div className="payment-icon flex justify-center items-center">
              <img src="images/footer_img1.png" alt="footer-pic" />
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100vw;
  height: auto;
  .payment-icon {
    width: 100%;
    img {
      width: 20rem;
      height: auto;
    }
  }
`;
