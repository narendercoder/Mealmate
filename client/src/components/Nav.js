import React from 'react'
import styled from 'styled-components';
import Login from './auth/Login';
import Signup from './auth/Signup';

const Nav = () => {
  return (
    <Wrapper>
     <div className='navbar'>

     <div className=''>
      <ul className='flex justify-between items-center'>
        <li>
        <Login/>

        </li>
        <li>
        <Signup/>
        </li>
      </ul>
     </div>
    

     </div>
    </Wrapper>
  )
}

export default Nav;

const Wrapper = styled.div`



`