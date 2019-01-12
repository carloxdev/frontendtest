import React from 'react'
import './styles.css'

const BannerAbout = () => {
    return [    
        <img key="1" src="/static/images/banners/banner-about.jpg" alt="banner" />,
        <figcaption key="2" className="banner-info">
            <p className="banner-info-title">Somos un equipo de especialistas con más de 20 años de experiencia</p>
        </figcaption>
    ]
}

export default BannerAbout