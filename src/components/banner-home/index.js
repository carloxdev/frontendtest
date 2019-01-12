import React from 'react'
import './styles.css'

const BannerHome = () => {
    return [    
        <img key="1" src="/static/images/banners/banner-home.jpg" alt="banner" />,
        <figcaption key="2" className="banner-info">
            <p className="banner-info-title">Bienvenido a LOP México</p>
            <p className="banner-info-body">¿Estas listo para descubrir nuevos canales de comercialización?</p>
        </figcaption>
    ]
}

export default BannerHome