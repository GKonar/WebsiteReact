import React, { useState, useEffect } from "react";

import LoadingPage from '../LoadingPage';

import styled from 'styled-components';
import { sizes } from '../../helpers/sizes';
import { withStyles } from '@material-ui/core/styles';

import './imageAnimation.css';


const styles = {
  loaded: {
    animation: 'fadeInImg cubic-bezier(0.23, 1, 0.32, 1) 1',
    position: 'relative',
    opacity: 0,
    animationFillMode: 'forwards',
    animationDuration: '1s',
    animationDelay: '0.1s',
  },
  loading: {
    opacity: 0,
    width: '100%',
    height: 'auto',
  }
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  ${sizes.tablet} {
    position: relative;
    width: 175%;
    height: 175%;
    right: 35%;
  }
`

function ImageLoader({ classes, src }) {
  const [loaded, setLoaded] = useState(false);
  let [className] = useState('');

  const onLoad = () => {
    setLoaded(true);
  };

  className = `${className} ${loaded ? classes.loaded : classes.loading}`

  return (
    <>
      <Image
        src={src}
        className={className}
        onLoad={onLoad}
        alt="lazy"
      />
      <LoadingPage loaded={loaded} />
    </>
  )
}

export default withStyles(styles)(ImageLoader);