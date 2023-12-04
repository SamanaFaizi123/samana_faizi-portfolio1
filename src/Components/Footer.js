import React from 'react';
import {FaTwitter,FaInstagram,FaLinkedin, FaWhatsapp, FaGithub} from 'react-icons/fa';
import styled,{keyframes} from 'styled-components';

const moveLeft= keyframes`
from {
  transform:translateX(0);
} to{
  transform:translateX(-100px);
}
`;
const moveup= keyframes`
from {
  transform:translateY(0);
} to{
  transform:translateY(-50px);
}

`;
const moveDown= keyframes`
from {
  transform:translateY(0);
} to{
  transform:translateY(50px);
}

`
const FooterContainer = styled.footer`
display:flex;
justify-content:center;
align-items:center;
padding:20px;
background-color: var(--deep-dark);

`;
const SocialMediaLink = styled.a`
display:inline-block;
margin:0 10px;
color:#000;
font-size:50px;
transition:color 0.3s;
&:hover{
  color:#00f;
}&:hover svg{
  fill:rgb(137, 109, 36);
}&:hover .twitter-icon{
  animation:${moveLeft} 1s forwards;
}
&:hover .linkedin-icon{
  animation:${moveDown} 1s forwards;
}&:hover .instagram-icon{
  animation:${moveDown} 1s forwards;
}&:hover .whatsap-icon{
  animation:${moveup} 1s forwards;
}&:hover .github-icon{
  animation:${moveup} 1s forwards;
}
. container footer-text{
  font-size:16px;
  padding:1rem 0 ;
  margin-top:10px;
  text-align:center;
}


`

export default function Footer() {
  return (
    <FooterContainer>
      <p className=' container footer-text'>  2023| designed by Samana Faizi </p>
      <SocialMediaLink href = 'https://twitter.com/FaiziSamana?s=09' >
        < FaTwitter className='twitter-icon'/>
      </SocialMediaLink>
      <SocialMediaLink href = 'https://instagram.com/samanafaizi?igshid=YWYwM2I1ZDdmOQ==' >
        <FaInstagram  className='instagram-icon'/>
        
      </SocialMediaLink>
      <SocialMediaLink href = "https://www.linkedin.com/in/samana-faizi-b9824a254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" >
        <FaLinkedin className='linkedin-icon' />
      </SocialMediaLink>
      <SocialMediaLink href = "https://wa.me/qr/BMTEQHVHBG22I1" >
        <FaWhatsapp className='whatsap-icon'/>
      </SocialMediaLink>
      <SocialMediaLink href = "https://github.com/SamanaFaizi123" >
        <FaGithub className='github-icon'/> 
      </SocialMediaLink>
    </FooterContainer>
    
  )
}

 
    
   









