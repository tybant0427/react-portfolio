import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import pdf from "../../images/2022resume.pdf"

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
            
                <Button onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                <a href={pdf} target="_blank">
                    Resume {hover ? < ArrowForward /> : <ArrowRight />}
                   </a>
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;