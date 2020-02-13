import React from 'react'
import styled from 'styled-components';

const Container = styled.p`
  font-size: ${({ theme }) => theme.textSize.small};
  line-height: 2rem;
  padding-bottom: ${({ theme }) => theme.padding.between};
  margin: 0;

`
function Paragraph({ children }) {
  return (
    <Container>{children}</Container>
  )
}

export default Paragraph
