import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

const PopupInfo = (props) => {
    const class_str = props.popup_active == true ? "popup-info popup-info--show" : "popup-info"
    let title = ""
    let body = ""

    if (props.option === "moderno") {
        title = "Gestion de canal moderno"
    }

    if (props.option === "detalle") {
        title = "Gestion de Canal Detalle"
    }

    if (props.option === "planeacion") {
        title = "Planeación Estratégica"
    }

    if (props.option === "evaluacion") {
        title = "Evaluacion de Proyectos de Inversión"
    }

    if (props.option === "coaching") {
        title = "Coaching"
    }

    if (props.option === "capacitacion") {
        title = "Capacitación"
    }

    return (
        <div className={class_str}>
            <div className="popup-info-wrap">
                <div className="popup-info-header">
                    <div className="popup-info-header-title">{title}</div>
                    <div className="popup-info-header-icon">
                        <a href="#" onClick={props.close_popup}><FontAwesomeIcon icon="times-circle" /></a>
                    </div>
                </div>
                <div className="popup-info-body">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>            
        </div>
    )
}

export default PopupInfo