import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';


const Container = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  transition: .3s;
`

function LinkElement({ children, link }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const styles = {
    color: isDarkMode ? 'white' : ''
  }

  return <Container style={styles} href={link} target="_blank" rel="noopener noreferrer">{children}</Container>
}

export default LinkElement;
