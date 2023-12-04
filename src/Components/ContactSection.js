import React from 'react';
import HeaderSection from './HeaderSection';
import styled from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import {  MdEmail, MdTextFormat, } from 'react-icons/md';
import ContactForm from './ContactForm';
import {motion} from "framer-motion"
import { useState } from 'react';
import { useEffect } from 'react';

const ContactSectionStyle = styled.div`
padding: 10rem 0rem ;
.contactSection--wrapper{
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
}.contactSection--wrapper::after{
    position: absolute;
    content:'';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%,-50%);
}.left{
    width: 100%;
    max-width: 500px;
}.right{
    max-width: 500px;
    width: 100%;
}
@media only screen and (max-width: 768px) {
    .contactSection--wrapper {
      flex-direction: column;
    }
    .contactSection--wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`

export default function ContactSection() {
  const[isAnimated, setIsAnimated] = useState(false);
  useEffect(() =>{
    setIsAnimated(true)
  },[])
  return (
    <ContactSectionStyle>
        <div className='container'> 
        <motion.div initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}} transition={{duration:0.6}}>
        < HeaderSection heading='Contact' subheading='Get in touch'/>
        </ motion.div>
        <div className='contactSection--wrapper'>
            <div className='left'>
              <motion.div  initial={{opacity:0,y:20}}
              animate={isAnimated ? {opacity:1,y:0}:{}}
              transition={{duration:0.6,delay:0.2}}>
                < ContactInfoItem  icon={<MdTextFormat />}
                text="Do not hesitant to contact me"/> 
                </motion.div>
                <motion.div   initial={{opacity:0,y:0}}
              animate={isAnimated ? {opacity:1,y:0}:{}}
              transition={{duration:0.6,delay:0.4}}>
                <ContactInfoItem  icon={< MdEmail/>}
                text='faizisamana@gmail.com'/>
                 </motion.div>
                 <motion.div    initial={{opacity:0,y:20}}
              animate={isAnimated ? {opacity:1,y:0}:{}}
              transition={{duration:0.6,delay:0.6}}>
                 <ContactInfoItem  text='Bakrabad,Herat,Afghanistan'/>
                 </motion.div >  
            </div>
            <div className='right'>
              <motion.div    initial={{opacity:0,y:20}}
              animate={isAnimated ? {opacity:1,y:0}:{}}
              transition={{duration:0.6,delay:0.8}}>
                < ContactForm />
                </motion.div>
            </div>
        </div>
        </div>
    </ContactSectionStyle>
  )
}
