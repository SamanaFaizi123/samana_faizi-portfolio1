import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
    
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
   
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }#light{
    // background-color:#f3ebf6;
    background-color:white;
  }#dark{
    background-color: var(--dark-bg);
  }#light .hi{
    color:black;
  }#ligt .nav{
    background-color: rgba(245, 245, 245, 0.632);
    
  }#light .nav:hover{
    color:black;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid black;
    background-color:gray;

  }
  #light .nav.active  {
    color:white;
    background-color:gray;

  }#light .text{
    color:black;
  }#light .ho{
    color:black;

  }#light .ht{
    color:black;
  }#light .h3{
    color:black;
  }#light .h4{
    color:black;
  }#light .button-icon{
    color:black;
  }#light .button:hover{
    color:black;
  }#light .scroll{
    color:black;
  }#light .edu{
    color:black;
  }#light .sk{
    color:black;
  }#light .w{
    color:black;
  }#light .sama{
    color:black;
   
  }#light .h5{
    background-color:gray;
  }#light .school{
    color:black;
  }#light .search input{
    background-color:gray;
  }#light .img{
    color:black;
  }

  #light .hero__scrollDown{
    color:black;
  } 
   #ligh .projects--searchBar{
    background-color:black;
    
}.switch{
  display:flex;
  width:100vw;
  height:-1000px;
  justify-content:center;
  align-items:center;

}.switch label{
  margin: 10px;
}  #light .switch label{
  color:black;
  font-size:2rem;

}  #dark .switch label{
  color:white;
  font-size:2rem;
  
}
}
 
  }
  }
 Smooth Scroll  
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }

`;
export default GlobalStyles;
