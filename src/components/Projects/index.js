import React from 'react'
import Icon1 from '../../images/4822857.png';
import Icon2 from '../../images/Schedule.png';
import Icon3 from '../../images/770b805d5c99c7931366c2e84e88f251.png';
import Icon4 from '../../images/2125457.png';

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP
} from './ProjectsElements';

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard>
            <ProjectsH2>Chord-Base</ProjectsH2>
                <ProjectsIcon src={Icon1}/>
                <ProjectsP>
                    <a href="https://amber-robeck.github.io/project1/index.html">Deployed App</a> <br/> 
                    <a href="https://github.com/tybant0427/project1">Github Repo</a> 
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
            <ProjectsH2>Employee Scheduler</ProjectsH2>
                <ProjectsIcon src={Icon2}/>
                <ProjectsP>
                    <a href="https://shrouded-anchorage-20681.herokuapp.com/">Deployed App</a> <br/>
                    <a href="https://github.com/tybant0427/Employee-Scheduling-Tool">GitHub Repo</a>
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
            <ProjectsH2>Weather Dashboard</ProjectsH2>
                <ProjectsIcon src={Icon3}/>
                <ProjectsP>
                    <a href="https://tybant0427.github.io/weather-app/">Deployed App</a> <br/>
                    <a href="https://github.com/tybant0427/weather-app">GitHub Repo</a>
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
            <ProjectsH2>Tech Blog</ProjectsH2>
                <ProjectsIcon src={Icon4}/>
                <ProjectsP>
                <a href="https://tech-blog-tybant.herokuapp.com/">Deployed App</a> <br/>
                <a href="https://github.com/tybant0427/tech-blog">GitHub Repo</a> 
                </ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects