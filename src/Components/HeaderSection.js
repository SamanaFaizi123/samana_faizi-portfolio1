import React  from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

const SectionTitleStyle =styled.div`
 text-align:center;
p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem; 
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 4rem;
    margin-top: 0.5rem;
    text-transform: uppercase;  
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }

`

export default function HeaderSection({
    subheading ="This is subheading",
    heading = "This is heading",}) 
{
  return (
    <SectionTitleStyle>
      <motion.p className='ho' initial={{opacity:0, y:-20}} 
      animate={{opacity:1,y:0}}
      transition={{duration:0.6,delay:0.2}}
      >{subheading}</motion.p>
     <motion.h2 className='ht'  initial={{opacity:0, y:-20}} 
     animate={{opacity:1,y:0}}
      transition={{duration:0.6,delay:0.2}} > 
          {heading}</motion.h2>  
    </SectionTitleStyle>
  )
}
