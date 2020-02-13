import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  font-weight: 600;
  position: relative;
  width: 50%;
  color:  ${({ theme }) => theme.color.primary};
`

function SectionContainer({ children }) {
  return (
    <Container>{children}</Container>
  )
}

export default SectionContainer
