import React from 'react';
import styled from 'styled-components/';

const CenteringContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function ({ children }) {
  return <CenteringContainer>{children}</CenteringContainer>
}