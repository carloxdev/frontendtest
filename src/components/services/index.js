import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PopupInfo from '../popup-info/index.js'
import '../buttons/index.js'
import './styles.css'

class Services extends React.Component {

    constructor(props) {
        super(props)
        this.state =  { 
            popup_active : false,
            option: "" 
        }

        this.window = document
        this.set_Event()
    }

    set_Event() {
        this.window = addEventListener(
            "keydown",
            this.close_WithKeyPopup.bind(this)
        )
    }

    show_Info (option, e) {
        e.preventDefault()
        document.body.classList.add("popup-info--show-body")
        console.log(this)
        this.setState({
            popup_active : true,
            option: option
        })
    }

    close_Popup (e) {
        e.preventDefault()
        document.body.classList.remove("popup-info--show-body")
        this.setState({
            popup_active : false
        })
    }

    close_WithKeyPopup (e) {
        e.preventDefault()
        if (e.keyCode == 27) {
            this.setState({
                popup_active : false
            })
        }
    };

    render() {

        return [
            <PopupInfo
                popup_active={this.state.popup_active}
                option={this.state.option}
                close_popup={this.close_Popup.bind(this)}
                key="1">
            </PopupInfo>,
            <div className="services" key="2">
                <div className="services-title">
                    Ofrecemos soluciones de alto impacto para su empresa para mejorar la rentabilidad de su operación con una visión holística y sustentable de negocio.
                </div>
                <div className="services-body">

                    <article className="services-body-item">
                        <figure>
                            <img src="static/images/icons/online-store.svg" alt="canal_moderno"/>
                            <figcaption>
                                Gestion de canal moderno
                            </figcaption>
                        </figure>
                        <footer>
                            <button className="default" onClick={this.show_Info.bind(this, "moderno")}>
                                <span>Más información</span>
                                <FontAwesomeIcon icon="arrow-alt-circle-right" />
                            </button>
                        </footer>
                    </article>

                    <article className="services-body-item">
                        <figure>
                            <img src="static/images/icons/store.svg" alt="canal_detalle"/>
                            <figcaption>
                                Gestion de Canal Detalle
                            </figcaption>
                        </figure>
                        <footer>
                            <button className="default" onClick={this.show_Info.bind(this, "detalle")}>
                                <span>Más información</span>
                                <FontAwesomeIcon icon="arrow-alt-circle-right" />
                            </button>
                        </footer>
                    </article>

                    <article className="services-body-item">
                        <figure>
                            <img src="static/images/icons/line-graphic.svg" alt="planeacion"/>
                            <figcaption>
                                Planeación Estratégica
                            </figcaption>
                        </figure>
                        <footer>
                            <button className="default" onClick={this.show_Info.bind(this, "planeacion")}>
                                <span>Más información</span>
                                <FontAwesomeIcon icon="arrow-alt-circle-right" />
                            </button>
                        </footer>
                    </article>

                    <article className="services-body-item">
                        <figure>
                            <img src="static/images/icons/crecimiento2.svg" alt="inversion"/>
                            <figcaption>
                                Evaluacion de Proyectos de Inversión
                            </figcaption>
                        </figure>
                        <footer>
                            <button className="default" onClick={this.show_Info.bind(this, "evaluacion")}>
                                <span>Más información</span>
                                <FontAwesomeIcon icon="arrow-alt-circle-right" />
                            </button>
                        </footer>
                    </article>

                    <article className="services-body-item">
                        <figure>
                            <img src="static/images/icons/businessman.svg" alt="coaching"/>
                            <figcaption>
                                Coaching
                            </figcaption>
                        </figure>
                        <footer>
                            <button className="default" onClick={this.show_Info.bind(this, "coaching")}>
                                <span>Más información</span>
                                <FontAwesomeIcon icon="arrow-alt-circle-right" />
                            </button>
                        </footer>
                    </article>

                    <article className="services-body-item">
                        <figure>
                            <img src="static/images/icons/red.svg" alt="capacitacion"/>
                            <figcaption>
                                Capacitación
                            </figcaption>
                        </figure>
                        <footer>
                            <button className="default" onClick={this.show_Info.bind(this, "capacitacion")}>
                                <span>Más información</span>
                                <FontAwesomeIcon icon="arrow-alt-circle-right" />
                            </button>
                        </footer>
                    </article>
                </div>
            </div>
        ]
    }
}

export default Services;


