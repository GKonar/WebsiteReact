import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { Link } from "react-router-dom";

import { sizes } from '../helpers/sizes';
import LinkElement from './LinkElement';
import NavbarLogo from '../components/NavbarLogo';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.primary};

  .link {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary};
  }
`

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 95%;
  position: relative;

  .toggle {
    margin-right: 3rem;
  }
  
  /* custom react-toggle classes */
  .react-toggle-track-check,
  .react-toggle-track-x {
    position: absolute;
    top: 11px;
    right: 14px;
  }
  .react-toggle--checked .react-toggle-track {
    background-color: ${({ theme }) => theme.color.primary};
  } 
  .react-toggle--checked:hover:not(.react-toggle-disabled) .react-toggle-track {
    background-color: ${({ theme }) => theme.color.primary};
  }
`

const ListItem = styled.li`
  list-style: none;
  font-size: ${({ theme }) => theme.textSize.regular};
  font-weight: 500;
  margin: 1rem 2.5rem;
  position: relative;

  ${sizes.tablet} {
    display: none;
  }

  &::after {
    content: "";
    display: flex;
    border-bottom: 2px solid;
    position: absolute;
    top: .6rem;
    z-index: 1;
    opacity: 0;
    transition: all .4s;
    transform: translateY(1.5rem);
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    &::after {
        transform: translateY(1rem);
        opacity: 1;
        z-index: 1;
  }
}
`

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false)

  return (
    <Nav>
      <List>
        <Toggle
          icons={{
            checked: '🌛',
            unchecked: '😎',
          }}
          className='toggle'
          onChange={() => console.log('RAGNAR IS DEAD')}
        />
        <LinkElement link="https://github.com/gkonar">
          <NavbarLogo>Gk</NavbarLogo>
        </LinkElement>
        <ListItem>.About</ListItem>
        <ListItem>
          <LinkElement link="https://github.com/gkonar">.Works</LinkElement>
        </ListItem>
        <ListItem>
          <Link className='link' to='/contact'>.Contact</Link>
        </ListItem>
      </List>
    </Nav>
  );
}

export default Navbar;
