import React from 'react';

import {
  BioContainer,
  BioWrapper,
  BioRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img
} from './BioElements';

const BioSection = ({
  imgStart,
  headline,
  description,
  img,
  alt,
  id,
}) => {
  
  return (
    <>
      <BioContainer id={id}>
        <BioWrapper>
          <BioRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </BioRow>
        </BioWrapper>
      </BioContainer>
    </>
  );
};

export default BioSection;