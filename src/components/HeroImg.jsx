import React from 'react'

function HeroImg({src, style}) {
    return (
        <img className={style} src={src} alt="hero"/>
    )
}

export default HeroImg
