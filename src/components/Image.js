import React from 'react';

function Image({ src, alt, width }) {
  return <img style={{ width }} src={src} alt={alt} />
}

export default Image;
