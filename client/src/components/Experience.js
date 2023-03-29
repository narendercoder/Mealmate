import React from 'react'
import styled from 'styled-components';
import Button from '../styles/Button';
import DotButton from '../styles/DotButton';

const Experience = () => {
  return (
    <Wrapper>
        <div className="experience-section flex justify-center items-center py-20">
            <div className="custom-container">

               <div className='grid lg:grid-cols-2'>

                <div>
                    <div className="text-box flex flex-col justify-center">
                        <div className="sub-title">
                            <h5>Dine In or Take Away</h5>
                        </div>
                        <div className="title">
                            <h1>Get Your Order 24/7 Right At Your Doorsteps</h1>
                        </div>
                        <DotButton/>
                        <p className='desc mt-10'>
                        Plant-based diets may offer an advantage over those that are not plant based with respect to prevention and management of diabetes. the adventist health studies found that vegetarians have approximately half the risk of developing diabetes
                        </p>
                        <div className='button-exp mt-8'>
                            <Button className='btn order-btn'>
                              order Food
                            </Button>
                            <Button className='btn search-btn ml-4'>
                             Search Now
                            </Button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="scotor-img">
                        <img src="images/Online-delivery-1.png" alt="" />
                    </div>
                </div>

               </div>

            </div>
        </div>
    </Wrapper>
  )
}

export default Experience;

const Wrapper= styled.section`
.experience-section{
    width: 100vw;
    height: auto;

    .text-box{
     .title h1{
       font-size: 42px;
       font-weight: 700;
       margin-top: 5px;
       margin-bottom: 15px;
     }
    }

    .sub-title{
        color: #FFCC00;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 0;
    }

    .desc{
        font-size: 18px;
        font-weight: normal;
        color: #757575;
        text-transform: inherit;
        line-height: 1.8;
    }

    .order-btn{
         background-color: #FFCC00;
         color: black;
    }
    .search-btn{
         background-color: #000000;
         color: white;
    }
}
`