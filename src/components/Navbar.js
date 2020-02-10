import React from 'react';
import styled from 'styled-components';

import LinkElement from './LinkElement';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
`

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 95%;
  position: relative;
`

const ListItem = styled.li`
  list-style: none;
  font-size: ${({ theme }) => theme.textSize.regular};
  font-weight: 500;
  margin: 1rem 2.5rem;
  position: relative;

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


function Navbar() {
  return (
    <Nav>
      <List>
        <LinkElement link="https://github.com/gkonar">
          <Logo>Gk</Logo>
        </LinkElement>
        <ListItem>
          <LinkElement link="https://github.com/gkonar">.Works</LinkElement>
        </ListItem>
        <ListItem>.About</ListItem>
        <ListItem>.Contact</ListItem>
      </List>
    </Nav>
  );
}

export default Navbar;
