import React, { useContext } from 'react'
import styled from 'styled-components';
import { sizes } from '../helpers/sizes';

import { ThemeContext } from '../context/ThemeContext';

const Container = styled.p`
  font-size: ${({ theme }) => theme.textSize.small};
  line-height: 2rem;
  padding-bottom: ${({ theme }) => theme.padding.between};
  margin: 0;
  
  ${sizes.tablet} {
    text-align: justify;
  }
`
function Paragraph({ children }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Container style={{ color: isDarkMode ? 'white' : '' }}>{children}</Container>
  )
}

export default Paragraph
