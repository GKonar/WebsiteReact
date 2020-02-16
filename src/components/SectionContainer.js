import React from 'react'
import styled from 'styled-components';

import { sizes } from '../helpers/sizes';

const Container = styled.div`
  margin: 0 auto;
  font-weight: 600;
  position: relative;
  width: 50%;
  color:  ${({ theme }) => theme.color.primary};

  ${sizes.laptopL} {
    width: 60%;
  }
  ${sizes.tablet} {
    width: 80%;
  }
  
`

function SectionContainer({ children }) {
  return (
    <Container>{children}</Container>
  )
}

export default SectionContainer
