import React, { useEffect, useState, useContext } from 'react';
import ReactRevealText from 'react-reveal-text';
import styled from 'styled-components';
import { sizes } from '../helpers/sizes';

import { ThemeContext } from '../context/ThemeContext';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.margin.related};
  color:  ${({ theme }) => theme.color.primary};
  .greeting {
    font-size: ${({ theme }) => theme.textSize.large};

    ${sizes.tablet} {
      font-size: ${({ theme }) => theme.textSize.medium};
    }
    ${sizes.mobileL} {
      font-size: ${({ theme }) => theme.textSize.regular};
    }
  }
  .name {
    font-size: ${({ theme }) => theme.textSize.xxxlarge};
    
    ${sizes.tablet} {
      font-size: ${({ theme }) => theme.textSize.xlarge};
    }
    ${sizes.mobileL} {
      font-size: ${({ theme }) => theme.textSize.large};
    }
  }
  .position {
   font-size: ${({ theme }) => theme.textSize.large};
   
   ${sizes.tablet} {
      font-size: ${({ theme }) => theme.textSize.medium};
    }
    ${sizes.mobileL} {
      font-size: ${({ theme }) => theme.textSize.regular};
    }
  }
  .greeting,
  .name,
  .position {
    width: 40%;
    padding-bottom: 5px;
    letter-spacing: 1px;
    font-weight: 500;

    ${sizes.tablet} {
      width: 60%;
    }

    ${sizes.mobileL} {
      width: 70%;
    }
  }
`

function WelcomeText() {
  const [showText, setShowText] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 300);
  }, []);

  return (
    <TextWrapper style={{ color: isDarkMode ? 'white' : '' }}>
      <span className="greeting"><ReactRevealText show={showText}>Hello I'm</ReactRevealText></span>
      <span className="name"><ReactRevealText show={showText}>Grzegorz</ReactRevealText></span>
      <span className="position"><ReactRevealText show={showText}>Software Developer</ReactRevealText></span>
    </TextWrapper>
  )
}

export default WelcomeText;
