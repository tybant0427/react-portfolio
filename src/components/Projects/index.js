import React from 'react'
import Icon1 from '../../images/4822857.png';
import Icon2 from '../../images/b0b85cd8797638d0c80035f572b0cbd3.jpeg';
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
                <ProjectsIcon src={Icon1}/>
                <ProjectsH2>GitHub Repo</ProjectsH2>
                <ProjectsP>Learn Guitar Today!</ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon2}/>
                <ProjectsH2>GitHub Repo</ProjectsH2>
                <ProjectsP>Make Scheduling Easier!</ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon3}/>
                <ProjectsH2>GitHub Repo</ProjectsH2>
                <ProjectsP>Get The Weather!</ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon4}/>
                <ProjectsH2>GitHub Repo</ProjectsH2>
                <ProjectsP>Get The Weather!</ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects