import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import PuffLoader from "react-spinners/PuffLoader";
import { Hidden } from '@material-ui/core';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color:${({ theme }) => theme.color.secondary};
  z-index: 1000;
  position: fixed;
  transition: .2s;
  display: flex;
  justify-content: center;
  align-items: center;
`

function LoadingPage() {
  const [isVisible, setIsVisible] = useState(true);

  const styles = {
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden'
  }

  useEffect(() => {
    console.log('useEffect');
    setTimeout(() => setIsVisible(false), 400);
  }, []);

  return (
    <Container style={styles}>
      <PuffLoader color='#16a085' size={200} />
    </Container>
  )
}

export default LoadingPage
