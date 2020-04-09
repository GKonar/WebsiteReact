import React, { useContext } from 'react';
import styled from 'styled-components';
import { sizes } from '../helpers/sizes';

import { ThemeContext } from '../context/ThemeContext';

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

  ${sizes.tablet} {
      left: 5%;
    }

  ${sizes.mobileL} {
      left: 8%;
    }
 
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
  const { isDarkMode } = useContext(ThemeContext);

  const styles = {
    color: isDarkMode ? 'white' : ''
  }
  return (
    <Logo style={styles}>{children}</Logo>
  )
}

export default NavbarLogo
