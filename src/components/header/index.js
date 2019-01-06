import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state =  {
            logo_img: "/static/images/logo.png",
            flag_mx: "/static/images/flags/mx.svg",
            flag_us: '/static/images/flags/us.svg',
            menu: false
        }

        this.open_Menu = this.open_Menu.bind(this);
        this.close_Menu = this.close_Menu.bind(this);
    }

    open_Menu () {
        event.preventDefault()
        this.setState({
            menu: true
        })
    }

    close_Menu () {
        event.preventDefault()
        this.setState({
            menu: false
        })
    }

    set_MenuClass () {
        var menu_class = "menu-main"
        if (this.state.menu) {
            menu_class = "menu-main menu-main--show"
        }

        return menu_class
    }

    render() {
        var menu_class = this.set_MenuClass()

        var page_home = ""
        if (this.props.option == "home") {
            page_home = "selected"
        }

        var page_aboutus = ""
        if (this.props.option == "aboutus") {
            page_aboutus = "selected"
        }

        var page_services = ""
        if (this.props.option == "services") {
            page_services = "selected"
        }

        var page_contact = ""
        if (this.props.option == "contact") {
            page_contact = "selected"
        }

        return (
            <div className="header">
                <figure className="logo">
                    <img src={this.state.logo_img} alt="logo" />
                </figure>
                <div className="menus">
                    <nav className={menu_class}>
                        <a href="#" className="btn-close" onClick={this.close_Menu}>
                            <FontAwesomeIcon icon="times" />
                        </a>
                        <a className={page_home} href="/home.html"><span>Inicio</span></a>
                        <a className={page_aboutus} href="/aboutus.html"><span>Quienes Somos</span></a>
                        <a className={page_services} href="/services.html"><span>Servicios</span></a>
                        <a className={page_contact} href="/contact.html"><span>Contactanos</span></a>
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
                        <FontAwesomeIcon icon="bars" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Header
