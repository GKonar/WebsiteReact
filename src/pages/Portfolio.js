import React, { useContext } from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import WelcomeText from '../components/WelcomeText';
// import Image from '../components/Image';
import CenteringContainer from '../components/CenteringContainer';

import About from './sections/About';
import Skills from './sections/Skills';
import Reachme from './sections/Reachme';
import Footer from './sections/Footer';

import headerImage from '../assets/images/me.jpg';
import { sizes } from '../helpers/sizes';

import { ThemeContext } from '../context/ThemeContext';

// Lazy load
import LazyLoad from 'react-lazy-load';
import ImageLoader from '../components/ImageLoader/ImageLoader';

const Container = styled.div`
  border: 1rem solid #2f3542;
  background-color:${({ theme }) => theme.color.secondary};
`

const ImageContainer = styled.div`
  margin: ${({ theme }) => theme.margin.between};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${sizes.tablet} {
    margin: ${({ theme }) => theme.margin.sibling};
    /* width: 100%; */
  }
`

function Portfolio() {
  const { isDarkMode } = useContext(ThemeContext);

  const styles = {
    backgroundColor: isDarkMode ? 'black' : '',
    border: isDarkMode ? '1rem solid black' : ''
  }

  return (
    <Container style={styles}>
      <Navbar />
      <WelcomeText />
      <CenteringContainer>
        <ImageContainer>
          <LazyLoad
            debounce={false}
            offsetVertical={100}
          >
            <ImageLoader src={headerImage} alt="my-img" />
          </LazyLoad>
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
