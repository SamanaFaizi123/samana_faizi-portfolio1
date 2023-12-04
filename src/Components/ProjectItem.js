import React from 'react';
import { Link } from 'react-router-dom';
import LoginImg from "../assets/images/login.jpg";
import styled from 'styled-components';


const ProjectItemStyles = styled.div`
.projectItem--img{
    width:100%;
    height:400px;
    overflow: hidden;
    border-radius:10px;
    display:inline-block;
    border:3px solid var(--gray-2);
    img {
        height :100%;
        background-color :fill;
}
}.projectItem--info{
    margin-top:1rem;
    background-color:var(--deep-dark);
    padding:1rem;
    border-radius:10px;
}.projectItem--title{
    font-size:2rem;

}.projectItem--desc{
    font-size:1.6rem;
    font-family:" RobotoMono Regular";
    margin-top:1rem;
}.github-link{
  display: flex;
  align-items: center;
  color: var(--gray-1);
  margin-top:0.5rem;
  font-size:2rem;
}span{ 
 width:3rem;
 display:inline-block;

} span{
  margin-top: 12rem;
}
@media only screen and (max-width: 768px) {
    .projectItem--img {
      height: 350px;
    }
  }
  .project_button{
    display:inline-block;
    font-size:1.8rem;
    text-decoration:underline;
    margin:1rem 0 ;
    color:royalblue;
    
  }

`
export default function ProjectItem({
 Img=LoginImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  demoLink = "https://project3-psi-seven.vercel.app/",
  githubLink = "https://samanafaizi123.github.io/AppCalaculator/"               
}) 
 {
  const handleImgClick = () => {
   window.open(demoLink,"_blank")  }; 
  return (
    <ProjectItemStyles>
        <Link to="/projects" className='projectItem--img'
         onClick={handleImgClick}>
        <img  src={Img} alt='' />
        </Link>
        <div className='projectItem--info'>
            <Link to="#">
                <h3 className='projectItem--title'>{title}</h3>
            </Link>
            <p className='projectItem--desc'> {desc} </p>
            {demoLink && (
            <a href={demoLink} target="_blank" rel='noreferrer'>  </a>)}
            {
              githubLink &&(
                <a href={githubLink} target='_blank' rel='noreferrer' className='project_button'> 
         See the Project code </a>
              )
            }   </div>
    </ProjectItemStyles>
  )
}
