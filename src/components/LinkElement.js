import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  transition: .3s;
`

function LinkElement({ children, link }) {
  return <Container href={link} target="_blank" rel="noopener noreferrer">{children}</Container>
}

export default LinkElement;
