import React from 'react';
 import HeaderSection from './HeaderSection';
import {FaArrowRight} from 'react-icons/fa';
import AboutImg from "../assets/images/about-sec-img.jpg";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import {motion} from "framer-motion";

const AboutSectionStyles = styled.div `
padding:8rem 0;
.container{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    text-align:left;   
 }.button{
    display:inline-flex;
    align-items: center;
    color:hsl(0,0%,40%);
    border: 1px solid rgb(137, 109, 36);
    padding: 8px 30px 8px 18px;
    text-align: center;
   border-radius: 30px;
   font-family:" RobotoMono Regular";
   font-size:18px;
   font-wight:500;
   position: relative;
   overflow:hidden;
   transition:all 0.25s ease-in-out; 
 }.button:hover {
  color:#fff;
 }.button-icon{
  right:0;
   color:withe;
  }
 .button::before{
  content:'';
   position: absolute;
   inset:0;
   background-color:rgb(137, 109, 36);
  transform:translateX(100%);
   z-index:-1;
   transition:all 0.3s ease-out;
 }.button:hover::before{
   transform:translateX(0px);
 }
 .button-icon{
  //  background-color:rgb(137, 109, 36);
   padding:10px;
   border-radius: 50%;
   margin-left:40px;
 poistion: absolute;
 top:50%;
 right:-55px;
 width:45px;
 border-radius:50%;
 color:#fff;
 font-size:18px;
 text-align: center;
 line-height : 10px;
 transition: all 0.3s ease-out;
}
.aboutSection__right{
      flex:4;
    width:50%;
    height:400px;
}.text{
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 2em;
}
.section-title{
    text-align:left;   
}.para{
  
    margin-top:2rem;
    margin-left:0;
}.aboutSection__buttons{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:2rem;
    margin-top:2rem;
} @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }.text{
      font-size: 1.4rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
    
`
export default function AboutSection() {
return (
    <AboutSectionStyles>
        <div className='container'>
            <div className="aboutSection__left">
      < HeaderSection 
        subheading= {<Typical className="h3"
         steps={['Let me introduce myself!',2000 ]} loop={Infinity}></Typical>}
          heading= {<Typical  className ="h4" steps={['About me',2000]} loop={1} > 
          </Typical >}/>
                <p className='text'>
               I am a website developer from Herat,Afghanistan. I am learning
              web devlopment in CTI(Code To Inspire) academy,
              I try to create professional websites. I love coding and art ,and I 
              always try to show unique views to the audience.
                </p>
                <div className='aboutSection__buttons'>
                <Link to="/about" className='button'>Read More about me {''}
               <span className='button-icon'>
                <FaArrowRight /></span></Link>
            </div>
        </div>
        <div className='aboutSection__right'>
          <motion.img src={AboutImg} alt='aboutImg'
            initial={{opacity:0,x:30}} animate={{opacity:1,x:0}}
            transition={{duration:0.6,delay:0.6}}/>
            </div>
        </div>
    </AboutSectionStyles>
  );
}
