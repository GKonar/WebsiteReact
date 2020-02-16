import React from 'react'

import styled from 'styled-components';
import LinkElement from '../../components/LinkElement';

import { ReactComponent as Mail } from '../../assets/icons/reachme/mail-color.svg';
import { ReactComponent as Facebook } from '../../assets/icons/reachme/facebook-color.svg';
import { ReactComponent as Instagram } from '../../assets/icons/reachme/insta.svg';
import { ReactComponent as Cv } from '../../assets/icons/reachme/cv.svg';
import { ReactComponent as Github } from '../../assets/icons/reachme/github-color.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/reachme/linkedin.svg';

import cv from '../../assets/cv/GrzegorzKonarski-resume.pdf';

import { sizes } from '../../helpers/sizes';

const IconsContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.secondaryGreen};
  padding: ${({ theme }) => theme.padding.related};
  margin-top: ${({ theme }) => theme.margin.between};
  
  svg {
    margin: ${({ theme }) => theme.margin.related};
    width: 35px;
    height: 35px;
    transition: .2s;
    &:hover {
      transform: scale(1.2);
    }
    ${sizes.tablet} {
      width: 30px;
      height: 30px;
    }
  }
`

function Reachme() {
  return (
    <IconsContainer>
      <LinkElement link="https://www.linkedin.com/in/grzegorz-konarski-872ba0165/"><Linkedin /></LinkElement>
      <LinkElement link="mailto:grzegorz.konarski86@gmail.com"><Mail /></LinkElement>
      <LinkElement link="https://www.facebook.com/grzegorz.konarski.52"><Facebook /></LinkElement>
      <LinkElement link="https://www.instagram.com/konar42/"><Instagram /></LinkElement>
      <LinkElement link={cv}><Cv /></LinkElement>
      <LinkElement link="https://github.com/gkonar"><Github /></LinkElement>
    </IconsContainer>
  )
}

export default Reachme;
