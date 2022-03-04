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
            <a href= 'https://drive.google.com/file/d/1sxMQe6rvv4GySOCX9nTI0G-7Sj011AYF/view?usp=sharing' target='_blank'>
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