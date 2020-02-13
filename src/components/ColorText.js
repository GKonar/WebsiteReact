import React from 'react'
import styled from 'styled-components';

const Container = styled.span`
  color: ${({ theme }) => theme.textColor.secondary};
  font-weight: 700;
`

function ColorText({ children }) {
  return (
    <Container>{children}</Container>
  )
}

export default ColorText
