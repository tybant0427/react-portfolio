import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, Resume } from './HeroElements';

const HeroSection = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}
return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Greetings, I'm Tyler.</HeroH1>
            <HeroP>Full Stack Developer</HeroP>
            <HeroBtnWrapper>
            <a href= 'https://docs.google.com/document/d/1cnPUc-Onq7WQ4fzvuwO2fSWqQw1c-2Ah6YtOiWZz-Gw/edit' target='_blank'>
            <Button
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            > 
            Resume {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          </a>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}


export default HeroSection;