import React from 'react'
import './styles.css'

const Team = () => {
    return (
        <div className="team">
            <div className="team-title">
                LOP Mexico esta integrado por expertos en las áreas de ventas, mercadotecnia, capacitación y planeación estratégica en diversas categorías. 
            </div>
            <div className="team-body">
                <figure className="team-body-item">
                    <img src="/static/images/team/fernando.jpg" alt="fernando" />
                    <figcaption>
                        <div className="team-body-item-name">Elias Fernando Lopez P.</div>
                        <div className="team-body-item-job">Director LOP Mexico</div>
                    </figcaption>
                </figure>
                <figure className="team-body-item">
                    <img src="/static/images/team/lorena.jpg" alt="lorena" />
                    <figcaption>
                        <div className="team-body-item-name">Lorena García</div>
                        <div className="team-body-item-job">Directora de Consultoria en Canal Moderno</div>
                    </figcaption>
                </figure>
                <figure className="team-body-item">
                    <img src="/static/images/decorators/user.svg" alt="user" />
                    <figcaption>
                        <div className="team-body-item-name">Miguel Aguilar Barcenas</div>
                        <div className="team-body-item-job">Director de Consultoria Zona Sureste</div>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Team
