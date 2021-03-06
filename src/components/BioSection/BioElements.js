import styled from 'styled-components';

export const BioContainer = styled.div`
  color: #fff;
  background: #0d0d0d;

  @media screen and (max-width: 768px) {
    padding: 300px 0;
  }
`;

export const BioWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const BioRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  
  @media screen and (max-width: 480px) {
    margin-top:20px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #ffffff;
  margin-top:-30px;

  @media screen and (max-width: 480px) {
    margin-top: -150px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;

export const ImgWrap = styled.div`
  max-width: 360px;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: -80px;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
  border-radius: 10px;
`;
