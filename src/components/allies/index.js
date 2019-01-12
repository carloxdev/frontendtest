import React from 'react'
import './styles.css'

const Allies = () => {    
    return (
        <div className="allies">
            <div className="allies-title">    
                Contamos con alianzas estratégicas en áreas tales como:
            </div>
            <div className="allies-body">

                <article className="allies-body-item">
                    <header>BRANDING</header>
                    <figure>
                        <img src="static/images/allies/caos.png" alt="caos" />
                        <figcaption>
                            <a href="http://www.caosmexico.com">
                                www.caosmexico.com
                            </a>
                        </figcaption>
                    </figure>
                </article>

                <article className="allies-body-item">
                    <header>INVESTIGACION DE MERCADOS</header>
                    <figure>
                        <img src="static/images/allies/mercadiez.png" alt="mercadiez" />
                        <figcaption>
                            <a href="http://www.mercadiez.com">
                                www.mercadiez.com
                            </a>
                        </figcaption>
                    </figure>
                </article>

            </div>
        </div>
    )
}

export default Allies
