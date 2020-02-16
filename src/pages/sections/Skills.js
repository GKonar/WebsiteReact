import React from 'react'
import styled from 'styled-components';

import H3 from '../../components/H3';
import Paragraph from '../../components/Paragraph';
import ColorText from '../../components/ColorText';
import SectionContainer from '../../components/SectionContainer';
import LinkElement from '../../components/LinkElement';

import { sizes } from '../../helpers/sizes';

// Svg icons as components TODO // do I like this approach ??
// Thanks for Icons https://icons8.com/icons/ 💚
import { ReactComponent as Css } from '../../assets/icons/skills/css3.svg';
import { ReactComponent as GitHub } from '../../assets/icons/skills/github.svg';
import { ReactComponent as Html } from '../../assets/icons/skills/html-5.svg';
import { ReactComponent as Javascript } from '../../assets/icons/skills/javascript.svg';
import { ReactComponent as Npm } from '../../assets/icons/skills/npm.svg';
import { ReactComponent as ReactJS } from '../../assets/icons/skills/react.svg';
import { ReactComponent as Sass } from '../../assets/icons/skills/sass.svg';
import { ReactComponent as Webpack } from '../../assets/icons/skills/webpack.svg';

const IconsContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
`
const Icon = styled.span`
  margin: ${({ theme }) => theme.margin.compact};

  svg {
    width: 55px;
    height: 55px;

    ${sizes.tablet} {
      width: 40px;
      height: 40px;
    }
  }
`
function Skills() {
  const icons = [<Html />, <Css />, <Sass />, <Javascript />, <ReactJS />, <GitHub />, <Webpack />, <Npm />]

  return (
    <SectionContainer>
      <H3>Skills:</H3>
      <Paragraph>
        <ColorText>Some</ColorText>. of the technologies and tools which I use:
        <IconsContainer>
          {icons.map((icon, i) => <Icon key={i}>{icon}</Icon>)}
        </IconsContainer>
      </Paragraph>
      <Paragraph>
        A partial overview of my personal projects and completed tutorials can be found on my
        <LinkElement link="https://github.com/gkonar"><ColorText> GitHub </ColorText></LinkElement>
        page. I was experymenting with many technologies to feel more comfortable. Currently in love
        with <ColorText> React </ColorText>.
      </Paragraph>
    </SectionContainer>
  )
}

export default Skills;