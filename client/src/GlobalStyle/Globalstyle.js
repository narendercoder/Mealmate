import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


::-webkit-scrollbar {
    background-color: initial;
    width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: grey;
    border-radius: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px grey;
}
.App{
 position: relative;
 width: 100vw;
 overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
}

a {
  font-size: 0.8rem;

}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.8;
}

p,span {
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1rem;
  
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 2rem;
}
h4{
  font-size: 1.5rem;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.custom-container{
  margin: 0 auto;
}


@media (min-width: 1400px){

.custom-container {
  max-width: 1320px;
}
.category-main{
    width: 25%;
}
}

@media (min-width: 1200px) and (max-width: 1400px){

.custom-container {
    max-width: 1140px;
}
.category-main{
    width: 25%;
}
}
@media (min-width: 992px) and (max-width: 1200px){

  .custom-container {
      max-width: 960px;
  }
  .category-main{
      width: 50%;
  }
  html{
    font-size: 100%
  }
  
}

@media (min-width: 768px) and (max-width: 992px){

  .custom-container {
      max-width: 720px;
  }
  .category-main{
      width: 50%;
  }
  html{
    font-size: 100%
  }
}

@media (min-width: 576px) and (max-width: 768px){

  .custom-container {
      max-width: 720px;
  }
  .category-main{
      width: 50%;
  }
  html{
    font-size: 80%
  }
}

@media screen and (max-width: 576px){
  
  .custom-container {
      max-width: 540px ;
  }
  html{
    font-size: 60%;
  }

}


`;
