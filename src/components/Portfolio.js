import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import WelcomeText from './WelcomeText';
import Image from './Image';
import CenteringContainer from './CenteringContainer';

import headerImage from '../assets/images/me.jpg';

const ImageContainer = styled.div`
  /* margin-top: ${({ theme }) => theme.margin.between};
  margin-bottom: ${({ theme }) => theme.margin.between}; */
  margin: ${({ theme }) => theme.margin.between};

  display: flex;
  justify-content: center;
`

function Portfolio() {
  return (
    <div>
      <Navbar />
      <WelcomeText />
      <CenteringContainer>
        <ImageContainer>
          <Image src={headerImage} alt="me" width="100%" />
        </ImageContainer>
      </CenteringContainer>
    </div>
  );
}

export default Portfolio;
