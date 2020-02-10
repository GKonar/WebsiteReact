import React, { useEffect, useState } from 'react';
import ReactRevealText from 'react-reveal-text';
import styled from 'styled-components';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.margin.between};
  .greeting {
    font-size: ${({ theme }) => theme.textSize.large};
  }
  .name {
    font-size: ${({ theme }) => theme.textSize.xxxlarge};
    font-weight: 500;
  }
  .position {
   font-size: ${({ theme }) => theme.textSize.large};
  }
  .greeting,
  .name,
  .position {
    width: 35%;
    padding-bottom: 8px;
    letter-spacing: 1px;
    margin-left: 5rem;  
  }
`

function WelcomeText() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 300);
  }, []);

  return (
    <TextWrapper>
      <span className="greeting"><ReactRevealText show={showText}>Hello I'm</ReactRevealText></span>
      <span className="name"><ReactRevealText show={showText}>Grzegorz</ReactRevealText></span>
      <span className="position"><ReactRevealText show={showText}>Junior Front-End Developer</ReactRevealText></span>
    </TextWrapper>
  )
}

export default WelcomeText;
