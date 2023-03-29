import React from 'react'
import styled from 'styled-components';

const DotButton = () => {
  return (
    <Wrapper>
      <div className='bottom-dots'>
      <span className='dot line-dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      </div>
    </Wrapper>
  )
}

export default DotButton;

const Wrapper  = styled.div`
position: relative;


.bottom-dots{

    .dot{
    position: relative;
    display: block;
    float: left;
    width: 3px;
    height: 3px;
    border-right: 3px solid #FFCC00;
    margin-right: 3px;
    }
 .line-dot{
    border-right: 40px solid #FFCC00;
 }
}
`