import './styles.css'

export default class HeaderMain {

    constructor () {
        this.menu_main = document.getElementById("menu-main")
        this.btn_open = document.getElementById("menu-main-btn-open")
        this.btn_close = document.getElementById("menu-main-btn-close")
        this.menu_language = document.getElementById("menu-language")
        this.menu_language_indicator = document.getElementById("menu-language-indicator")
        
        this.set_Events()
    }

    set_Events () {
        this.btn_open.addEventListener(
            "click",
            this.click_OpenIcon.bind(this)
        )

        this.btn_close.addEventListener(
            "click",
            this.click_CloseIcon.bind(this)
        )

        this.menu_language.addEventListener(
            "mouseover",
            this.mouseover_MenuLanguage.bind(this)
        )
        this.menu_language.addEventListener(
            "mouseout",
            this.mouseout_MenuLanguage.bind(this)
        )
    }

    click_OpenIcon (event) {
        event.preventDefault()
        this.menu_main.classList.add('menu-main--show')
    }

    click_CloseIcon (event) {
        event.preventDefault()
        this.menu_main.classList.remove('menu-main--show')
    }

    mouseover_MenuLanguage (event) {
        event.preventDefault()
        this.menu_language_indicator.classList.remove('fa-angle-down')
        this.menu_language_indicator.classList.add('fa-angle-up')
    }

    mouseout_MenuLanguage (event) {
        event.preventDefault()
        this.menu_language_indicator.classList.remove('fa-angle-up')
        this.menu_language_indicator.classList.add('fa-angle-down')
    }
}