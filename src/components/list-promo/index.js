import React from 'react'
import './styles.css'

const Promo = () => {    
    return [
        <article key="1" className="list-promo">
            <header className="list-promo-header">
                En LOP Mexico ofrecemos servicios de asesoría con consultores de alto nivel
            </header>
            <section className="list-promo-body">
                <figure className="list-promo-body-img">
                    <img src="/static/images/icons/customer-review.svg" alt="promo-img" />
                </figure>
                <div className="list-promo-body-text">
                    Nuestros consultores asociados han sido ejecutivos de alto nivel en empresas como Coca Cola, FEMSA, PANAMCO, Modelez, Diageo, Philip Morris, MVS entre otras.
                </div>
            </section>
        </article>,
        <article key="2" className="list-promo">
            <header className="list-promo-header">
                Utilizamos metodologias practicas
            </header>
            <section className="list-promo-body">
                <figure className="list-promo-body-img">
                    <img src="/static/images/icons/handshake.svg" alt="promo-img" />
                </figure>
                <div className="list-promo-body-text">
                    Nuestras metodologías tienen una base conceptual y son llevadas a la práctica a través de proyectos de acompañamiento con el equipo directivo de su empresa.
                </div>
            </section>
        </article>,
        <article key="3" className="list-promo">
            <header className="list-promo-header">
                ¡Aseguramos la obtención de resultados!
            </header>
            <section className="list-promo-body">
                <figure className="list-promo-body-img">
                    <img src="/static/images/icons/presentation.svg" alt="promo-img" />
                </figure>
                <div className="list-promo-body-text">
                    La obtención de resultados estan claramente definidos en tiempo y forma de acuerdo a un plan de trabajo especifico.
                </div>
            </section>
        </article>
    ]
}

export default Promo
