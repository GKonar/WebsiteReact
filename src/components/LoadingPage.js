import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import PuffLoader from "react-spinners/PuffLoader";

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

function LoadingPage({ loaded }) {
  const [isVisible, setIsVisible] = useState(true);

  const styles = {
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden'
  }

  useEffect(() => {
    setTimeout(() => setIsVisible(loaded), 500);
  }, []);

  return (
    <Container style={styles}>
      <PuffLoader color='#16a085' size={200} />
    </Container>
  )
}

export default LoadingPage
