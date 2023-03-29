import React from "react";
import styled from "styled-components";
import DotButton from "../styles/DotButton";

const Feedback = () => {
  return (
    <Wrapper>
      <div className="feedback-section flex justify-center items-center py-20">
        <div className="custom-container">
          <div className="feedback-heading flex flex-col justify-center items-center">
            <div className="subtitle">
              <h5>Satidfied Client</h5>
            </div>
            <div className="title">
              <h1 className="mb-4 pb-5">What Our client Say</h1>
            </div>
            <DotButton />
          </div>

          <div></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Feedback;

const Wrapper = styled.section`
  .feedback-section {
    background-color: #f2f2f2;

    .feedback-heading {
      .subtitle {
        color: #ffcc00;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 0;
      }
      .title {
        h1 {
          font-weight: 700;
          text-transform: capitalize;
        }
      }
    }
  }
`;
