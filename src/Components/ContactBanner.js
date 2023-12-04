import React, { useEffect } from 'react';
import PText from './PText';
import Button from './Button';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { useState } from 'react';

const ContactBannerStyle =styled.div`
padding:10rem 0;
.contactBanner--wrapper{
    background-color:var(--deep-dark);
    border-radius:12px;
    padding:5rem 0rem;
    text-align:center;
}.contactBanner--heading{
    font-size:4rem;
    margin-bottom:2rem;
}
@media only screen and (max-width: 768px) {
    .contactBanner--heading {
      font-size: 2.8rem;
    }
  }

`
export default function ContactBanner() {
  const[isAnimated, setIsAnimated] = useState(false);
  useEffect(() =>{
    setIsAnimated(true)
  },[])
  return (
    <ContactBannerStyle>
        <div className='container '>
            <div className='contactBanner--wrapper'>
              <motion.div  initial={{opacity:0,y:20}}
              animate={isAnimated ? {opacity:1,y:0}:{}}
              transition={{duration:0.6,delay:0.4}}>
                <PText >
                    Have a Project in mind!
                    </PText>
                    <h3 className='contactBanner--heading'>
                        Let me help you:</h3>
                        <Button btnText='Contact Now' btnLink='/contact'/>
                     </motion.div> </div>
</div>
    </ContactBannerStyle>
  )
}

