import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextCanalModerno from '../text-canal-moderno/index.js'
import TextCanalDetalle from '../text-canal-detalle/index.js'
import TextPlaneacion from '../text-planeacion/index.js'
import TextEvaluacion from '../text-evaluacion/index.js'
import TextCoaching from '../text-coaching/index.js'
import TextCapacitacion from '../text-capacitacion/index.js'


import './styles.css'


const PopupInfo = (props) => {
    const class_str = props.popup_active == true ? "popup-info popup-info--show" : "popup-info"
    let title = ""
    let body = ""

    if (props.option === "moderno") {
        title = "Gestion de canal moderno"
        body = <TextCanalModerno></TextCanalModerno>
    }

    if (props.option === "detalle") {
        title = "Gestion de Canal Detalle"
        body = <TextCanalDetalle></TextCanalDetalle>
    }

    if (props.option === "planeacion") {
        title = "Planeación Estratégica"
        body = <TextPlaneacion></TextPlaneacion>
    }

    if (props.option === "evaluacion") {
        title = "Evaluacion de Proyectos de Inversión"
        body = <TextEvaluacion></TextEvaluacion>
    }

    if (props.option === "coaching") {
        title = "Coaching"
        body = <TextCoaching></TextCoaching>
    }

    if (props.option === "capacitacion") {
        title = "Capacitación"
        body = <TextCapacitacion></TextCapacitacion>
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
                    {body}
                </div>
            </div>            
        </div>
    )
}

export default PopupInfo