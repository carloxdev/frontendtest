import React from 'react';
import './styles.css'

function TextAddress(props) {

    return (
        <React.Fragment>
            <header>
                O, visítanos en la siguiente dirección
            </header>
            <div className="text-address-body">
                <div className="text-address-text">
                    Roberto Gayol 19 Circuito Ingenieros, Naucalpan de Juárez
                </div>
                <iframe
                    className="text-address-map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1880.2912160302212!2d-99.235341!3d19.516593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203298b52eac5%3A0xe1832d5dd0f5727a!2sRoberto+Gayol+19%2C+Cd.+Sat%C3%A9lite%2C+53100+Naucalpan+de+Ju%C3%A1rez%2C+M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1547450451013"
                    allowFullScreen>
                </iframe>
            </div>
        </React.Fragment>
    )
}

export default TextAddress;

