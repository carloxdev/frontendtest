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
        this.setState({
            menu: true
        })
    }

    close_Menu () {
        this.setState({
            menu: false
        })
    }

    render() {
        const menu_class = (this.state.menu) ? "menu-main menu-main--show" : "menu-main"

        const option = this.props.option

        return [
            <figure key="1" className="logo">
                <img src={this.state.logo_img} alt="logo" />
            </figure >,
            <div key="2" className="menus">
                <nav className={menu_class}>
                    <a href="#" className="btn-close" onClick={this.close_Menu}>
                        <FontAwesomeIcon icon="times" />
                    </a>
                    <a className={ option === 'home' ? 'selected' : '' } href="/home.html"><span>Inicio</span></a>
                    <a className={ option === 'about' ? 'selected' : '' } href="/about.html"><span>Quienes Somos</span></a>
                    <a className={ option === 'services' ? 'selected' : '' } href="/services.html"><span>Servicios</span></a>
                    <a className={ option === 'contact' ? 'selected' : '' } href="/contact.html"><span>Contactanos</span></a>
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
        ]
    }
}

export default Header
