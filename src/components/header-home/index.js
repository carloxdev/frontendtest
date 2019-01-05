import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

class HeaderHome extends React.Component {

    constructor(props) {
        super(props)
        this.state =  {
            logo_img: "/static/images/logo.png",
            flag_mx: "/static/images/flags/mx.svg",
            flag_us: '/static/images/flags/us.svg',
            menu_class: "menu-main"
        }
    }

    open_Menu () {
        this.setState({
            menu_class: "menu-main--show"
        })        
    }

    render() {
        return (
            <header className="header">
                <figure className="logo">
                    <img src={this.state.logo_img} alt="logo" />
                </figure>
                <div className="menus">
                    <nav className="menu-main" id={`menu-main ${this.state.menu_class}`}>
                        <a href="#" className="btn-close" id="menu-main-btn-close">
                            <FontAwesomeIcon icon="times" />
                        </a>
                        <a id="page_home" href="/home.html"><span>Inicio</span></a>
                        <a id="page_aboutus" href="/aboutus.html"><span>Quienes Somos</span></a>
                        <a id="page_services" href="/services.html"><span>Servicios</span></a>
                        <a id="page_contact" href="/contact.html"><span>Contacto</span></a>
                    </nav>
                    
                    <div className="menu-language" id="menu-language">
                        <ul className="menu-language-body">
                            <li className="selected">    
                                <a href="#">
                                    <img src={this.state.flag_mx} alt="us" />
                                    <FontAwesomeIcon icon="angle-down" />
                                </a>
                            </li>
                            <li className="options">
                                <a href="#">
                                    <img src={this.state.flag_us} alt="us" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="menu-main-btn-open" onClick={this.open_Menu} >
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
            </header>
        )
    }
}

export default HeaderHome
