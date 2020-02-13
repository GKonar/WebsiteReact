import React from 'react';
import styled from 'styled-components/';

const CenteringContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function ({ children }) {
  return <CenteringContainer>{children}</CenteringContainer>
}