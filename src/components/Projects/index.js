import React from 'react'
import Icon1 from '../../images/4822857.png';
import Icon2 from '../../images/Schedule.png';
import Icon3 from '../../images/1182954.png';
import Icon4 from '../../images/770b805d5c99c7931366c2e84e88f251.png';

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
                    <a href="https://amber-robeck.github.io/Chord-Base/" target='_blank'>Deployed App</a> <br/> 
                    <a href="https://github.com/tybant0427/project1" target='_blank'>Github Repo</a> 
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
            <ProjectsH2>Employee Scheduler</ProjectsH2>
                <ProjectsIcon src={Icon2}/>
                <ProjectsP>
                    <a href="https://shrouded-anchorage-20681.herokuapp.com/" target='_blank'>Deployed App</a> <br/>
                    <a href="https://github.com/tybant0427/Employee-Scheduling-Tool" target='_blank'>GitHub Repo</a>
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
            <ProjectsH2>Creative-Dev</ProjectsH2>
                <ProjectsIcon src={Icon3}/>
                <ProjectsP>
                    <a href="">App in progress</a> <br/>
                    <a href="https://github.com/tybant0427/creative_dev" target='_blank'>GitHub Repo</a>
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
            <ProjectsH2>Weather Dashboard</ProjectsH2>
                <ProjectsIcon src={Icon4}/>
                <ProjectsP>
                <a href="https://tybant0427.github.io/weather-app/" target='_blank'>Deployed App</a> <br/>
                <a href="https://github.com/tybant0427/weather-app" target='_blank'>GitHub Repo</a> 
                </ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects