import React from 'react'
import styled from 'styled-components';

const FooterText = styled.div`
  position: relative;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  
  p {
    color: ${({ theme }) => theme.textColor.secondary};
    font-weight: 400;
    font-size:  ${({ theme }) => theme.textSize.small};
    position: absolute;
    top: 35%;
  }
`

function yearUpdate() {
  const date = new Date();
  return date.getFullYear();
}

function Footer() {
  return (
    <FooterText>
      <p>.handcrafted by me &copy; <span>{yearUpdate()}</span></p>
    </FooterText>
  )
}

export default Footer