import React from 'react'

function HeroImg({src, style}) {
    return (
      <picture >
        <img className={style} src={src} alt="hero" />
      </picture>
    );
}

export default HeroImg
