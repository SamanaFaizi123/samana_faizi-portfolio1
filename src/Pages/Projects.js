import React, { useEffect, useState } from 'react';
import HeaderSection from "../Components/HeaderSection";
import styled from 'styled-components';
import { MdSearch} from 'react-icons/md';
import ProjectItem from '../Components/ProjectItem';
import ProjectInfo from "../assets/data/projects";
 
const ProjectStyles = styled.div`
padding: 10rem 0 ;
.projects--allItems{
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    gap:5rem;
    margin-top:5rem;
}.projects--searchBar{
    position: relative;
    width: 300px;
    margintop: 5rem;    
}
.projects--searchBar input{
    width: 100%;
    fontsize: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    background-color:white;
    outline: none;
    border: none;
}.projects--searchBar .searchIcon{
    position: absolute;
    width: 2rem;
    right:1rem;
}.projects--searchBar .searchIcon path{
    color: var(--deep-dark);
} @media only screen and (max-width: 768px) {
    .projects--searchBar,
    .projects--searchBar form,
    .projects--searchBar input {
      width: 100%;
    }
  };

`
export default function Projects() {
    const [searchText,setSearchText] = useState('');
  const [projectData,setProjectData] = useState(ProjectInfo) ;
  useEffect(()=>{
    if(searchText === '') return;
    setProjectData(()=> (
     ProjectInfo.filter( item =>(
    item.name.toLowerCase().match(searchText.toLocaleLowerCase())
    ))
    )) 
  },[searchText]);
  function handleChange(event){
    event.preventDefault();
    setSearchText(event.target.value);
    if(!event.target.value.length > 0){
        setProjectData(ProjectInfo);
    }
  }
    return (
        <ProjectStyles>
        <div className='container'>
        <HeaderSection  heading='Projects' 
         subheading='Some of my recent works'/>
    <div className='projects--searchBar search'>
             <form>
            <input type='text'  
            value={searchText}
            onChange={handleChange}
             placeholder='Project Name' />
             <MdSearch  className='searchIcon'/>
            </form>
            </div>
             <div className='projects--allItems'>
             {projectData.map(item =>(
                <ProjectItem  key={item.id}
                    title={item.name}
                    desc={item.desc}
                    Img={item.Img} 
                     demoLink = {item.demoLink}
                githubLink={item.githubLink}/>   ))}
                </div>
            </div>
     </ProjectStyles>
     )
}
