import React from 'react'
import './styles.css'

const ListAllies = () => {    
    return (
        <div className="list-allies">
            <div className="list-allies-title">    
                Contamos con alianzas estratégicas en áreas tales como:
            </div>
            <div className="list-allies-body">

                <article className="list-allies-body-item">
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

                <article className="list-allies-body-item">
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

export default ListAllies
