import React from 'react'
import H3 from '../../components/H3';
import LinkElement from '../../components/LinkElement';
import Paragraph from '../../components/Paragraph';
import ColorText from '../../components/ColorText';
import SectionContainer from '../../components/SectionContainer';

function About() {
  return (
    <SectionContainer>
      <H3>About:</H3>
      <Paragraph>
        <ColorText>I'm Grzegorz</ColorText>. Always ready for new challanges to ramp up skills. My journey started around two and half years ago. During
        this time i was shaping my skills mostly by myself. I was practicing, experimenting and
        learning new things every day. To learn more, and review what I already know, I took part in <LinkElement link="https://kodilla.com/en">
          <ColorText>Front-End Bootcamp</ColorText></LinkElement>.
        To check exactly my path please go through my <LinkElement link="https://www.linkedin.com/in/grzegorz-konarski-872ba0165/"> <ColorText>LinkedIn</ColorText></LinkElement>.
      </Paragraph>
      <Paragraph>
        <ColorText>Privatly</ColorText> I am super happy father and husband. Big sports
        fan. New tech lover, wine drinker and very positive and relaxed person.
      </Paragraph>
      <H3>Current position:</H3>
      <Paragraph>
        From Mai 2020 I am working in <ColorText>Capgemini</ColorText> as Software Engineer. In current project I use followed technologies:  <ColorText>Typescript, React, C#</ColorText>.
      </Paragraph>
    </SectionContainer>
  )
}

export default About
