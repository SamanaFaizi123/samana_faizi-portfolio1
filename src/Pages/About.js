import React from 'react';
import {motion} from "framer-motion";
import HeroImg from '../assets/images/hero.jpg';
import styled from 'styled-components';
import AboutInfoItem from '../Components/AboutInfoItem';
import ContactBanner from "../Components/ContactBanner";


 const AboutPageStayles = styled.div`
 padding: 20rem 0rem 10rem 0rem;
 .top-section{
    display :flex;
    align-items :center;
    justify-content :center;
    gap :2rem;
 }.left{
    flex: 3;

 }.right{
    flex: 2
 }  .about--subheading{
    font-size :2.2rem ;
    margin-bottom :2rem;
    color:white;
span{
     background-color : var(--deep-dark);
    padding :0.5rem;
    border-radius : 8px;
    color:var(--deep-gray-1)
 }
}.about--heading{
    font-size :3.6rem;
    margin-bottom : 3rem;   
}.about--info{
    margin-bottom : 4rem;
    .para{
        max-width :100%;
    }
}.right{
    img{
        border:2px solid var(--gray-1);
    }
}.about--info--items{
    margin-top: 15rem;
    
  }.about--info--item{
    margin-bottom: 10rem;
  }.about--info--heading{
    font-size: 3.5rem;
    text-transform: uppercase;
  } .text{
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 2em;
  }
  
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }.text{
        font-size: 1.4rem;
      }
  }
 `
export default function About() {
    return (
<AboutPageStayles>
 <div className='container'>
    <div className='top-section'>
        <div className='left'>
    < motion.p className='about--subheading sama'>
         Hi,I am <motion.span className='h5'
         initial={{opacity:0}} animate={{opacity:1}} 
        transition={{duration:0.6,delay:0.4}}>Samana Faizi
        </motion.span>
         </ motion.p>
    < motion.h2 className='about--heading w'
     initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}}
        transition={{duration:0.6,delay:0.2}}>
             A website developer
             </motion.h2>
            <div  className='about--info'>
            <p className="text">
 I am from Herat,Afghanistan.
  a place of beauty and spectacular.
  Since my childhood, I love art and design.
  I always try to design
   stuff with my unique point of view. I also love to create things
     that can be usefull to others.< br/>< br/> 
     I started coding since I entered the university.
    coding is also an art for me. I love it and now I want to 
    learn design along with the coding . I find it really interesting
     and I enjoyed the process a lot.< br/>< br/> 
      My vision is to make the world a better place.
     Now almost everything is becoming better than ever.
 it is time for us to create more good stuff that helps the world to become a better place.
             </p>
         </div>                   
     </div>
        <div className='right'>
    < motion.img src={HeroImg} alt='samana Img'
     initial={{opacity:0,x:30}} animate={{opacity:1,x:0}}
    transition={{duration:0.6,delay:0.6}}/>
     </div>
     </div>
     <div className='about--info--items'>
    <div className='about--info--item'>
     <h1 className='about--info--heading  edu' >
             Education
             </h1>
     < AboutInfoItem title='School' 
    items={['Kartah . High School, Herat']}/>
     < AboutInfoItem title='College' 
     items={['Herat University']}/>
    < AboutInfoItem title='Major' 
    items={['Computer Science']} />
         </div>
    <div className='about--info--item'>
     <h1 className='about--info--heading sk'>
                 My Skills</h1>
            < AboutInfoItem title='FrontEnd' 
             items={[ 'HTML','CSS','JavaScript','React']} />
        < AboutInfoItem title='BackEnd' 
         items={['Node','PHP']} />
                    </div>
                </div>
            </div>
            < ContactBanner/>
        </AboutPageStayles>
    )
}
