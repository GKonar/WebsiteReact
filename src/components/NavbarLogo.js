import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  font-size: ${({ theme }) => theme.textSize.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .2rem;
  position: absolute;
  top: 20%;
  left: 3%;
  font-weight: 700;
  letter-spacing: 1px;

  &::after {
    content: "";
    border: 4px solid;
    width: 130%;
    height: 130%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: .4s;
  }

  &:hover {
    &::after {
      border: 4px solid;
      left: -25%;
      top: -25%;
      transform: rotate(180deg);
    }
  }
`

function NavbarLogo({ children }) {
  return (
    <Logo>{children}</Logo>
  )
}

export default NavbarLogo
