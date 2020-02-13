import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import WelcomeText from '../components/WelcomeText';
import Image from '../components/Image';
import CenteringContainer from '../components/CenteringContainer';

import About from './sections/About';
import Skills from './sections/Skills';
import Reachme from './sections/Reachme';
import Footer from './sections/Footer';

import headerImage from '../assets/images/me.jpg';

const Container = styled.div`
  border: 1rem solid #2f3542;
  background-color:${({ theme }) => theme.color.secondary};
`

const ImageContainer = styled.div`
  margin: ${({ theme }) => theme.margin.between};
  display: flex;
  justify-content: center;
`


function Portfolio() {
  return (
    <Container>
      <Navbar />
      <WelcomeText />
      <CenteringContainer>
        <ImageContainer>
          <Image src={headerImage} alt="me" width="100%" />
        </ImageContainer>
      </CenteringContainer>
      <About />
      <Skills />
      <Reachme />
      <Footer />
    </Container>
  );
}

export default Portfolio;
